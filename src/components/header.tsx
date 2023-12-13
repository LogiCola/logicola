export function Header() {
  return (
    <>
      <section className='bg-white dark:bg-slate-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white'>
            LogiCola for Everyone
          </h1>
          <p className='mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-48 dark:text-slate-400'>
            LogiCola is a program to help students learn logic. This is a web
            version of the original software built by the late Professor Harry
            Gensler.
          </p>
        </div>
      </section>
    </>
  );
}
