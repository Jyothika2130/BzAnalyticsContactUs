interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <div className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden flex items-center">

     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://bzanalytics.ai/assets/images/backgrounds/page-header-bg-1-1.jpg')",
        }}
      />

     
      <div className="absolute inset-0 bg-black/40" />

     
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl text-white">

          
          <div className="mb-4 text-sm sm:text-base flex items-center gap-2 text-gray-200">
            <a href="/" className="hover:text-orange-400 transition font-bold text-[16px]">
              Home
            </a>
            <span>.</span>
            <span className="font-bold text-[16px]">{breadcrumb}</span>
          </div>

          
          <h1 className="text-3xl sm:text-4xl md:text-[160px] lg:text-6xl font-extrabold">
            {title}
          </h1>

        </div>
      </div>
    </div>
  );
}