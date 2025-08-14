import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // SEO library

import Home from './Pages/Home';
import ComputerLaptops from './Pages/ComputerLaptops';
import Television from './Pages/Television';
import Accessories from './Pages/Accessories';
import PrinterScanner from './Pages/PrinterScanner';
import Logistic from './Pages/Logistic';
import Locations from './Pages/Locations';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import OrderForm from './Pages/OrderForm';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Default SEO for the whole site */}
        <Helmet>
          <title>Lakhmani Infotech | Best Computer Shop in Patna</title>
          <meta
            name="description"
            content="Lakhmani Infotech Computers offers laptops, desktops, TVs, accessories, printers, and more at unbeatable prices."
          />
          <meta
            name="keywords"
            content="computer shop, computer shop in patna, laptop shop in patna, tv shop in patna,  laptops, desktops, TVs, printers, printer shop in patna, accessories, Your City"
          />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://www.lakhmaniinfotech.in" />

           {/* Structured Data (Business Info) */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectronicsStore",
              name: "Lakhmani Infotech",
              image: "https://www.lakhmaniinfotech.com/logo.png",
              "@id": "https://www.lakhmaniinfotech.in",
              url: "https://www.lakhmaniinfotech.in",
              telephone: "+91-1234567890",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sahi Lane, S.P. VERMA ROAD, Patna – 800001, Bihar",
                addressLocality: "Patna",
                postalCode: "800001",
                addressCountry: "IN"
              },
              openingHours: "Mo-Sa 09:00-19:00",
            })}
          </script>
        </Helmet>

        {/* Your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computer-laptops" element={<ComputerLaptops />} />
          <Route path="/television" element={<Television />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/printer-scanner" element={<PrinterScanner />} />
          <Route path="/logistic" element={<Logistic />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order/:category/:productId" element={<OrderForm />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
