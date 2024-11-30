import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Hero from '../components/homepage/Hero';
import LogoCollection from '../components/homepage/LogoCollection';
import Highlights from '../components/homepage/Highlights';
import Pricing from '../components/homepage/Pricing';
import Features from '../components/homepage/Features';
import Testimonials from '../components/homepage/Testimonials';
import FAQ from '../components/homepage/FAQ';
import Footer from '../components/homepage/Footer';
import AppTheme from '../assets/template-themes/AppTheme';

export default function Index(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
