
import Hero from "./components/general/Hero";
import { Button } from "./components/ui/button";
import Resources from "./components/general/Resources";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Resources />
      {/* CTA Section */}
    </div>
  );
}
