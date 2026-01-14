interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

/**
 * Reusable page header banner component with background image and overlay.
 *
 * Provides consistent header styling across pages with:
 * - Full-width background image with dark scrim overlay for readability
 * - Centered title and subtitle text
 * - Responsive text sizing
 * - Fixed height of 384px (h-96)
 *
 * @param title - Main heading text
 * @param subtitle - Descriptive text below the title
 * @param backgroundImage - Path to background image (e.g., "/image.webp")
 */
export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <header className="relative h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      {/* Dark scrim for consistent text contrast regardless of background image */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 text-balance">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty max-w-2xl">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
