export default function Loading() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-8xl">Loading...</p>
      </div>
    )
  }