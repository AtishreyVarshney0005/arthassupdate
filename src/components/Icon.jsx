import {
  Lightbulb, Play, BarChart3, Compass, Camera, Megaphone, Search, Globe,
  Share2, Filter, ArrowRight, TrendingUp, Facebook, Instagram, Linkedin, Youtube,
  ChevronLeft, ChevronRight, Plus, Menu, X,
} from "lucide-react";

const map = {
  lightbulb: Lightbulb, play: Play, chart: BarChart3, compass: Compass,
  camera: Camera, megaphone: Megaphone, search: Search, globe: Globe,
  share: Share2, funnel: Filter, arrow: ArrowRight, trend: TrendingUp,
  facebook: Facebook, instagram: Instagram, linkedin: Linkedin, youtube: Youtube,
  prev: ChevronLeft, next: ChevronRight, plus: Plus, menu: Menu, close: X,
};

export default function Icon({ name, size = 20, ...rest }) {
  const C = map[name];
  return C ? <C size={size} aria-hidden="true" {...rest} /> : null;
}
