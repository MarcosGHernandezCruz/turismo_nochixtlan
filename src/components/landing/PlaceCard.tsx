import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PlaceProps {
  name: string;
  category: string;
  description: string;
  image: string;
}

export default function PlaceCard({ name, category, description, image }: PlaceProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all border-slate-200 rounded-md bg-white">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider rounded-sm shadow-sm">
          {category}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-serif text-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 px-2 py-2 min-h-11 font-semibold inline-flex items-center">
          Leer más histórica &rarr;
        </Button>
      </CardFooter>
    </Card>
  );
}