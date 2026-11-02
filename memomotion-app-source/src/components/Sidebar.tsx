import { Activity, BookOpen, Brain, CalendarCheck, ChartNoAxesColumn, CircleHelp, Compass, Flame, Heart, Home, Settings, Sparkles, Trophy, X } from "lucide-react";
export type Page = "Dashboard" | "Flashcards" | "Decks" | "Review" | "Favorites" | "AI Generator" | "Statistics" | "Achievements" | "Gesture Setup" | "Settings";
const items: { label: Page; icon: React.ElementType }[] = [
  { label: "Dashboard", icon: Home }, { label: "Flashcards", icon: BookOpen }, { label: "Decks", icon: Compass },
  { label: "Review", icon: CalendarCheck }, { label: "Favorites", icon: Heart }, { label: "AI Generator", icon: Sparkles },
  { label: "Statistics", icon: ChartNoAxesColumn }, { label: "Achievements", icon: Trophy }, { label: "Gesture Setup", icon: Activity }
];
export default function Sidebar({ page, onNavigate, open, onClose }: { page: Page; onNavigate: (p: Page) => void; open: boolean; onClose: () => void }) {
  return <><div className={`sidebar-backdrop ${open ? "show" : ""}`} onClick={onClose}/><aside className={`sidebar ${open ? "mobile-open" : ""}`}>
    <div className="brand"><div className="brand-mark"><Brain size={25}/></div><div><strong>MemoMotion</strong><small>Learn Through Movement.</small></div><button className="icon-btn mobile-close" onClick={onClose}><X size={18}/></button></div>
    <div className="nav-label">WORKSPACE</div><nav>{items.map(({label, icon: Icon}) => <button key={label} className={`nav-item ${page === label ? "active" : ""}`} onClick={() => { onNavigate(label); onClose(); }}><Icon size={19}/><span>{label}</span>{label === "Review" && <b className="nav-count">8</b>}</button>)}</nav>
    <div className="nav-label bottom-label">PREFERENCES</div><button className={`nav-item ${page === "Settings" ? "active" : ""}`} onClick={() => onNavigate("Settings")}><Settings size={19}/><span>Settings</span></button>
    <div className="sidebar-promo"><div className="promo-stars">✦ ✧</div><strong>Make every moment count.</strong><p>Small steps today, fluent conversations tomorrow.</p><button onClick={() => onNavigate("AI Generator")}>Explore AI tools <Sparkles size={14}/></button></div>
    <div className="sidebar-user"><div className="avatar">SK</div><div><strong>Sarah Kim</strong><small>Free plan</small></div><span className="user-more">•••</span></div>
  </aside></>;
}