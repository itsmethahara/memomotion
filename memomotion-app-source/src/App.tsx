import { useMemo, useState } from "react";
import { Menu, X, Settings, BookOpen, Heart, CalendarCheck, ChartNoAxesColumn, Trophy, Activity, Sparkles } from "lucide-react";
import Sidebar, { type Page } from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import Generator from "./pages/Generator";
import Gestures from "./pages/Gestures";
import Study from "./components/Study";
import { decks as initialDecks, type Deck } from "./data/decks";
import { useLocalState } from "./hooks/useLocalState";

export default function App() {
 const [page,setPage]=useState<Page>("Dashboard"); const [search,setSearch]=useState(""); const [mobileOpen,setMobileOpen]=useState(false);
 const [learned,setLearned]=useLocalState("mm-learned",0); const [streak,setStreak]=useLocalState("mm-streak",12);
 const [favorites,setFavorites]=useLocalState<number[]>("mm-favorites",[]); const [activeDeck,setActiveDeck]=useState<Deck|null>(null);
 const [reviewCount,setReviewCount]=useLocalState("mm-reviews",0);
 const filteredDecks=useMemo(()=>initialDecks.map(d=>({...d})),[]);
 const navigate=(p:Page)=>{setActiveDeck(null);setPage(p);};
 const startStudy=(d:Deck)=>setActiveDeck(d);
 const toggleFavorite=(id:number)=>setFavorites(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
 const rate=(_rating:string)=>{setLearned(n=>n+1);setReviewCount(n=>n+1);};
 const renderPage=()=>{if(activeDeck)return <Study deck={activeDeck} onExit={()=>setActiveDeck(null)} onRate={rate} favorites={favorites} toggleFavorite={toggleFavorite}/>;switch(page){
  case "Dashboard": return <Dashboard decks={filteredDecks} onNavigate={navigate} onStudy={startStudy} learned={learned} streak={streak}/>;
  case "Decks": case "Flashcards": return <Library decks={filteredDecks} onStudy={startStudy} search={search}/>;
  case "AI Generator": return <Generator/>;
  case "Gesture Setup": return <Gestures/>;
  case "Favorites": return <div className="page-content"><div className="date-line">YOUR SAVED WORDS</div><h1>Favorites</h1><p className="page-intro">{favorites.length} saved vocabulary items. Favorite words while studying to find them here.</p><div className="panel empty-state"><Heart size={28}/><strong>Your favorites will live here</strong><p>Save a word from a flashcard to build your personal collection.</p></div></div>;
  case "Review": return <div className="page-content"><div className="date-line">YOUR LEARNING ROUTINE</div><h1>Review schedule</h1><p className="page-intro">A little review goes a long way. You have 8 words ready for practice.</p><div className="panel simple-feature"><CalendarCheck size={30}/><h2>Ready for a quick review?</h2><p>Revisit vocabulary from your recent study sessions and strengthen your recall.</p><button className="primary-btn" onClick={()=>startStudy(filteredDecks[0])}>Start review <span>→</span></button></div></div>;
  case "Statistics": return <div className="page-content"><div className="date-line">YOUR LEARNING JOURNEY</div><h1>Statistics</h1><p className="page-intro">A snapshot of the habits you're building.</p><div className="stats-grid"><div className="stat-card"><div className="stat-label">Words learned</div><div className="stat-value">{450+learned}</div><div className="stat-delta">Across all languages</div></div><div className="stat-card"><div className="stat-label">Review actions</div><div className="stat-value">{reviewCount}</div><div className="stat-delta">This browser session history</div></div><div className="stat-card"><div className="stat-label">Current streak</div><div className="stat-value">{streak} days</div><div className="stat-delta">Keep showing up</div></div></div></div>;
  case "Achievements": return <div className="page-content"><div className="date-line">MILESTONES & MOTIVATION</div><h1>Achievements</h1><div className="panel simple-feature"><Trophy size={32}/><h2>12-day streak</h2><p>You've shown up for your learning journey 12 days in a row. Your next milestone is 14 days.</p><div className="progress-track"><i style={{width:"86%"}}/></div></div></div>;
  default: return <div className="page-content"><div className="date-line">YOUR PREFERENCES</div><h1>Settings</h1><div className="panel simple-feature"><Settings size={30}/><h2>Personalize MemoMotion</h2><p>Profile, language preferences, daily goals, and accessibility controls will be available here.</p><button className="secondary-btn" onClick={()=>setStreak(0)}>Reset demo streak</button></div></div>;
 }};
 return <div className="app-shell"><Sidebar page={page} onNavigate={navigate} open={mobileOpen} onClose={()=>setMobileOpen(false)}/><main className="main-area"><Topbar onMenu={()=>setMobileOpen(true)} search={search} setSearch={setSearch}/>{renderPage()}<footer className="app-footer"><span>© 2026 MemoMotion</span><span>Learn at your own pace <span className="footer-heart">♥</span></span></footer></main></div>;
}