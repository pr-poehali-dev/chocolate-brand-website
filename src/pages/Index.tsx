import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MasterclassesPage from './MasterclassesPage';
import ContactsPage from './ContactsPage';

type Page = 'home' | 'about' | 'masterclasses' | 'contacts';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'masterclasses': return <MasterclassesPage />;
      case 'contacts': return <ContactsPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{ background: 'var(--cocoa)', minHeight: '100vh' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
