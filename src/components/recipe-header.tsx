export function RecipeHeader() {
  return (
    <header className="relative h-96 bg-gradient-to-r from-primary/90 to-secondary/90 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/brazilian-feast-with-colorful-dishes-on-wooden-tab.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 text-balance">
          Sabores do Brasil
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty max-w-2xl">
          Descubra receitas autênticas e deliciosas da culinária brasileira
        </p>
      </div>
    </header>
  );
}
