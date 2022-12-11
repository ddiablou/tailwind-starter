import Button from "../misc/Button";

export default function Header() {
  return (
    <header className="body-font sticky top-0 bg-type2/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex flex-wrap px-5 py-3 flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-on-150 mb-4 md:mb-0 gap-2">
          LOGO OR NAME
        </a>
        <div className="gap-1 flex items-center">
          <Button variant="secondary">Button</Button>
        </div>
      </div>
    </header>
  );
}
