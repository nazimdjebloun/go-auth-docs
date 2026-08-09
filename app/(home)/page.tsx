import Link from 'next/link';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import type { Metadata } from 'next';
import { appName, siteDescription } from '@/lib/shared';

const homeTitle = `${appName} — Self-hosted authentication for Go`;

export const metadata: Metadata = {
  // .absolute bypasses the root layout's "%s | go-auth" template — the
  // home page's title already includes the brand name, so templating it
  // would double up into "... for Go | go-auth".
  title: { absolute: homeTitle },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: homeTitle,
    url: '/',
    images: '/background.webp',
  },
  twitter: {
    title: homeTitle,
    images: '/background.webp',
  },
};

const features = [
  {
    icon: '⬡',
    title: 'Multi-tenant Organizations',
    description: 'Owner/admin/member roles, invites, and a per-session active org — one config flag to enable.',
  },
  {
    icon: '☰',
    title: 'Admin API',
    description: 'Mounted endpoints to list, ban, role-change, and session-revoke any user, with a full audit trail behind them. Bring your own UI.',
  },
  {
    icon: '⟳',
    title: 'Two-Token Sessions',
    description: 'Session + refresh token rotation with idle timeout, grace window, and CSRF protection.',
  },
  {
    icon: '⇄',
    title: 'OAuth2 Ready',
    description: 'Built-in GitHub and Google providers behind a pluggable port.OAuthProvider interface.',
  },
  {
    icon: '⛊',
    title: 'Security by Default',
    description: 'Origin checking, a double-submit CSRF token, and per-route rate limiting — all on by default, off only if you say so.',
  },
  {
    icon: '▤',
    title: 'Audit Logging',
    description: 'Opt in with one flag for an async, non-blocking event pipeline with pluggable sinks — Kafka, NATS, a webhook, or your own.',
  },
  {
    icon: '✉',
    title: 'Bring Your Own Mailer',
    description: 'Swap SMTP for Resend, Postmark, or SES behind one interface; replace the email templates just as easily.',
  },
  {
    icon: '⎔',
    title: 'Multi-Driver Storage',
    description: 'PostgreSQL, MySQL, or SQLite — the library manages the connection, or borrows one you already opened.',
  },
];


export default function HomePage() {
  return (
    <>
      {/* Background image  */}
      <div className="fixed inset-0 z-0 pointer-events-none  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.webp')" }} />
      {/* Light overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-white/50 via-white/70 to-white/95 dark:from-black/40 dark:via-black/70 dark:to-black/95" />


      <main className="relative z-10 flex-1">
        {/* Hero */}
        <section className="relative flex flex-col items-center text-center px-6 pt-32 pb-20 sm:pt-44 sm:pb-28">
          <span className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/15 bg-white/50 dark:bg-transparent px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-white/60 mb-6">
            Pre-1.0 — the API may change before release
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance leading-[1.1] text-gray-900 dark:text-white">
            Self-hosted auth,
            <br />
            done right.
          </h1>

          <p className="mt-7 text-base sm:text-lg max-w-2xl text-balance leading-relaxed text-gray-700 dark:text-white/50">
            A self-hosted authentication and session library for Go <br /> email/password, OAuth, organizations, with CSRF protection and rate limiting.<br />
            Configure it with plain Go, mount the
            routes, and you have a real auth system in an afternoon.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-black px-9 py-2.5 text-[15px] font-medium transition-all hover:opacity-90"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/nazimdjebloun/go-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/15 bg-white/50 dark:bg-transparent text-gray-700 dark:text-white/70 px-9 py-2.5 text-[15px] font-medium transition-all hover:border-gray-400 dark:hover:border-white/30"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* Code Snippets */}
        <section className="max-w-4xl mx-auto px-6 pb-24 sm:pb-32">
          <Tabs items={['App', 'Provider', 'Session', 'Database', 'Security', 'Organizations']}>
            <Tab>
              <DynamicCodeBlock lang="go" code={`// The three required options — everything else has a default.
cfg, err := goauth.NewConfig(
    goauth.WithApp(goauth.AppConfig{
        Name:    "MyApp",
        BaseURL: "https://myapp.com",
        Database: goauth.DatabaseConfig{
            URL:    os.Getenv("DATABASE_URL"),
            Driver: goauth.DriverPostgres,
        },
        Environment: goauth.EnvironmentProd,
    }),

    // 32+ bytes. Every other key the library needs is derived
    // from this one — source it from the environment.
    goauth.WithSecret(os.Getenv("AUTH_SECRET")),

    goauth.WithSecurity(goauth.SecurityConfig{
        AllowedOrigins: []string{"https://myapp.com"},
    }),
)
if err != nil {
    log.Fatal(err)
}

auth, err := goauth.New(cfg)`} />
            </Tab>
            <Tab>
              <DynamicCodeBlock lang="go" code={`cfg, err := goauth.NewConfig(
    // ... WithApp, WithSecret and WithSecurity are required too

    // Plug in OAuth providers — interface is fully pluggable
    goauth.WithProvider(google.New(google.Config{
        ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
        ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
        RedirectURL:  os.Getenv("GOOGLE_REDIRECT_URL"),
    })),
    goauth.WithProvider(github.New(github.Config{
        ClientID:     os.Getenv("GITHUB_CLIENT_ID"),
        ClientSecret: os.Getenv("GITHUB_CLIENT_SECRET"),
        RedirectURL:  os.Getenv("GITHUB_REDIRECT_URL"),
    })),
)
if err != nil {
    log.Fatal(err)
}`} />
            </Tab>
            <Tab>
              <DynamicCodeBlock lang="go" code={`goauth.WithSession(goauth.SessionConfig{
    TTL:             30 * 24 * time.Hour,
    IdleTTL:         7 * 24 * time.Hour,
    RefreshTokenTTL: 30 * 24 * time.Hour,
    MaxLifetime:     0,                // 0 = no absolute cap
    GraceWindow:     5 * time.Second,  // goauth.Disabled turns it off
    TouchDebounce:   5 * time.Minute,
}),
goauth.WithCookie(goauth.CookieConfig{
    Name:        "goauth_session",
    RefreshName: "goauth_refresh",
    Path:        "/",
    SameSite:    http.SameSiteLaxMode,
    // Secure is left unset: derived as true everywhere except an
    // http:// BaseURL in EnvironmentDev. Override with
    // goauth.SecureAlways() / goauth.SecureNever().
}),`} />
            </Tab>
            <Tab>
              <DynamicCodeBlock lang="go" code={`// Option 1: Connection string (library manages the pool)
goauth.WithApp(goauth.AppConfig{
    Name:    "MyApp",
    BaseURL: "http://localhost:3000",
    Database: goauth.DatabaseConfig{
        URL:    "postgres://user:pass@localhost:5432/goauth?sslmode=disable",
        Driver: goauth.DriverPostgres,
    },
}),

// Option 2: Pre-opened *sql.DB
// goauth.WithApp(goauth.AppConfig{
//     Database: goauth.DatabaseConfig{DB: sqlDB},
// })

// Option 3: Pre-opened pgx pool
// goauth.WithApp(goauth.AppConfig{
//     Database: goauth.DatabaseConfig{Pool: pgxPool},
// })

// Other drivers:
// goauth.WithApp(goauth.AppConfig{
//     Database: goauth.DatabaseConfig{Driver: goauth.DriverSQLite},
// })
`} />
            </Tab>
            <Tab>
              <DynamicCodeBlock lang="go" code={`goauth.WithSecurity(goauth.SecurityConfig{
    AllowedOrigins: []string{
        "http://localhost:3000",
        "https://myapp.com",
    },
    AllowMissingCSRFHeaders: false,

    PasswordPolicy: domain.PasswordPolicy{
        MinLength:        8,
        RequireUppercase: false,
        RequireDigit:     true,
        RequireSpecial:   false,
    },

    // Origin checking and the double-submit CSRF token are both ON by
    // default — a token config is created for you. Pass CSRFToken only to
    // override its defaults, e.g. for a cross-site frontend:
    CSRFToken: &middleware.CSRFTokenConfig{
        CookieSameSite: http.SameSiteNoneMode,
    },
}),

// Per-IP token bucket rate limiter
goauth.WithRateLimit(ratelimit.Config{
    Enabled: true,
    Default: ratelimit.Rate{
        Requests: 60,
        Window:   time.Minute,
    },
}),`} />
            </Tab>
            <Tab>
              <DynamicCodeBlock lang="go" code={`goauth.WithOrganizations(goauth.OrganizationConfig{
    Enable:         true,
    MaxOrgsPerUser: 10,
    InviteTTL:      7 * 24 * time.Hour,
}),

// WithRegistration replaces every flag, not just the ones you set —
// list every method you want enabled alongside EnableInvite.
goauth.WithRegistration(goauth.RegistrationConfig{
    EnableEmailPassword: true,
    EnableOAuth:         true,
    AllowPublic:         true,
    EnableInvite:        true,
    InviteTTL:           7 * 24 * time.Hour,
}),

// Invites and required verification both need a way to send mail.
goauth.WithMailer(myMailer),`} />
            </Tab>
          </Tabs>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-7 bg-white/60 dark:bg-white/3 border border-gray-200 dark:border-white/6 backdrop-blur-md transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/5"
              >
                <div className="text-2xl mb-4 text-gray-400 dark:text-white/60" aria-hidden>{f.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-white/45">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 pb-8">
          <div className="rounded-3xl p-8 sm:p-10 bg-white/60 dark:bg-white/3 border border-gray-200 dark:border-white/6 backdrop-blur-xl w-full">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
              <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-white/50">
                <Link href="/docs" className="hover:text-gray-900 dark:hover:text-white transition-colors">Docs</Link>
                <Link href="/docs/installation" className="hover:text-gray-900 dark:hover:text-white transition-colors">Installation</Link>
                <Link href="/docs/configuration" className="hover:text-gray-900 dark:hover:text-white transition-colors">Configuration</Link>
                <Link href="/docs/guides/authentication" className="hover:text-gray-900 dark:hover:text-white transition-colors">Guides</Link>
                <Link href="/docs/providers" className="hover:text-gray-900 dark:hover:text-white transition-colors">Providers</Link>
                <Link href="/docs/routes" className="hover:text-gray-900 dark:hover:text-white transition-colors">Routes</Link>
                <Link href="/docs/error-handling" className="hover:text-gray-900 dark:hover:text-white transition-colors">Error Handling</Link>
                <Link href="/docs/architecture" className="hover:text-gray-900 dark:hover:text-white transition-colors">Architecture</Link>
                <Link href="/docs/security" className="hover:text-gray-900 dark:hover:text-white transition-colors">Security</Link>
              </nav>
              <div className="flex flex-wrap gap-5 text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider font-medium">
                <a href="https://github.com/nazimdjebloun/go-auth" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
                <a href="https://pkg.go.dev/github.com/nazimdjebloun/go-auth" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Go Doc</a>
                <a href="https://github.com/nazimdjebloun/go-auth/issues" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Report an Issue</a>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-gray-900/85 dark:text-white/85 break-all">
                go-auth
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400 dark:text-white/30">
              <span>© 2026 go-auth. All rights reserved.</span>
              <div className="flex gap-5">
                <span>MIT License</span>
                <a href="https://github.com/nazimdjebloun/go-auth" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-white/60 transition-colors">Source Code</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
