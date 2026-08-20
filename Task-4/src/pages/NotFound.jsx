function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-pink-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Axtardiginiz səhifə mövcud deyil.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;