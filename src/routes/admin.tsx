import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [{ title: "Admin | Writerpreneur Academy" }],
  }),
});

type SiteConfig = {
  whatsappUrl?: string;
};

function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (u) => {
      setUser(u);
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div className="w-full max-w-sm">{user ? <LinkEditor /> : <LoginForm />}</div>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
    } catch {
      setError("Incorrect email or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel p-6 sm:p-8">
      <h1 className="text-xl font-semibold text-foreground">Admin Login</h1>
      <p className="mt-1 text-sm text-muted-foreground">Sign in to edit the WhatsApp group link.</p>

      <label className="mt-6 block text-sm text-muted-foreground">
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-gold/25 bg-ink px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
        />
      </label>

      <label className="mt-4 block text-sm text-muted-foreground">
        Password
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border border-gold/25 bg-ink px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
        />
      </label>

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-gold px-5 py-3 font-semibold uppercase tracking-wide text-ink transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}

function LinkEditor() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    const ref = doc(getFirebaseDb(), "site-config", "main");
    const unsubscribe = onSnapshot(ref, (snap) => {
      const data = snap.data() as SiteConfig | undefined;
      const url = data?.whatsappUrl ?? "";
      setCurrentUrl(url);
      setNewUrl(url);
    });
    return () => unsubscribe();
  }, []);

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setStatus("saving");
    try {
      await setDoc(
        doc(getFirebaseDb(), "site-config", "main"),
        { whatsappUrl: newUrl },
        { merge: true },
      );
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="panel p-6 sm:p-8">
      <h1 className="text-xl font-semibold text-foreground">WhatsApp Link</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        This is the link people are sent to when they tap &quot;Join WhatsApp Group.&quot;
      </p>

      <p className="mt-6 break-all rounded-md border border-gold/20 bg-ink px-3 py-2 text-xs text-muted-foreground">
        Current: {currentUrl || "Not set"}
      </p>

      <form onSubmit={handleSave} className="mt-4">
        <label className="block text-sm text-muted-foreground">
          New group link
          <input
            type="url"
            required
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="https://chat.whatsapp.com/..."
            className="mt-1 w-full rounded-md border border-gold/25 bg-ink px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          />
        </label>

        <button
          type="submit"
          disabled={status === "saving"}
          className="mt-4 w-full rounded-full bg-gold px-5 py-3 font-semibold uppercase tracking-wide text-ink transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60"
        >
          {status === "saving" ? "Saving…" : "Save New Link"}
        </button>

        {status === "saved" && (
          <p className="mt-3 text-sm text-gold">Saved. The live site is now updated.</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-destructive">Something went wrong. Try again.</p>
        )}
      </form>

      <button
        type="button"
        onClick={() => signOut(getFirebaseAuth())}
        className="mt-6 text-xs text-muted-foreground underline underline-offset-4 hover:text-gold"
      >
        Log out
      </button>
    </div>
  );
}
