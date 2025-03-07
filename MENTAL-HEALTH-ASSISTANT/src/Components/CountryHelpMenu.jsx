import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './HomePage.css';
import './CountryHelpMenu.css';

// Predefined list of countries and their emotional support helplines (Example data)
const countryHelplines = {
  "United States": "National Helpline for Mental Health Support: 1-800-662-HELP (4357)",
  "United Kingdom": "Samaritans Helpline: 116 123",
  "Canada": "Crisis Services Canada: 1-833-456-4566",
  "Australia": "Lifeline Australia: 13 11 14",
  "India": "National Mental Health Support: 91-22-2772 6771",
  "Pakistan": "Pakistan Suicide Prevention Helpline: 021-35390006",
  "Algeria": "Algerian National Suicide Prevention Helpline: 3030",
  "Argentina": "Argentina Suicide Prevention Helpline: 135",
  "Brazil": "CVV Helpline (Brazil): 188",
  "China": "China Suicide Prevention Helpline: 800-810-1117",
  "France": "SOS Suicide Helpline: 01 45 39 40 00",
  "Germany": "Telefonseelsorge (Germany): 0800 111 0 111",
  "Italy": "Telefono Amico (Italy): 199 284 284",
  "Japan": "TELL Lifeline Japan: 03 5774 0992",
  "Mexico": "Línea Nacional contra el Suicidio (Mexico): 914-180-02",
  "Russia": "Russian Suicide Prevention Helpline: 8-800-2000-122",
  "South Africa": "Suicide Crisis Helpline South Africa: 0800 567 567",
  "Spain": "Línea Nacional de Prevención del Suicidio (Spain): 717 003 717",
  "Sweden": "Mind (Sweden): 020-22 00 60",
  "Turkey": "Turkish Suicide Prevention Helpline: 112",
  "Egypt": "Egyptian National Suicide Prevention Helpline: 0800-777-7272",
  "France": "SOS Suicide: 01 45 39 40 00",
  "Belgium": "Suicide Prevention Helpline (Belgium): 1813",
  "Finland": "Mieli Suicide Prevention Finland: 010 195 202",
  "Netherlands": "Suicide Prevention Helpline (Netherlands): 113",
  "Switzerland": "Die Dargebotene Hand (Switzerland): 143",
  "Norway": "Mental Health Helpline Norway: 116 123",
  "Greece": "Suicide Prevention Helpline Greece: 1018",
  "Portugal": "Portuguese Suicide Prevention Helpline: 808 24 24 24",
  "Israel": "Israel Suicide Prevention Helpline: 1201",
  "Singapore": "Samaritans of Singapore: 1800-221-4444",
  "Malaysia": "Befrienders Malaysia: 03-7627-2929",
  "South Korea": "Korean Suicide Prevention Helpline: 1393",
  "Thailand": "Samaritans Thailand: 02-713-6793",
  "New Zealand": "Lifeline New Zealand: 0800 543 354",
  "Nigeria": "Lifeline Nigeria: 0708-076-4769",
  "Vietnam": "Vietnam Suicide Prevention Helpline: 1800 2021",
  "Philippines": "Befrienders Philippines: 02-8804-4673",
  "Indonesia": "Indonesia Mental Health Helpline: 119",
  "Colombia": "Línea Nacional de Prevención del Suicidio (Colombia): 1-800-112",
  "Chile": "Suicide Prevention Helpline Chile: 800-836-348",
  "Peru": "Peru Suicide Prevention Helpline: 0800-6667",
  "Ukraine": "Ukraine Suicide Prevention Helpline: 0800-500-033",
  "Poland": "Suicide Prevention Helpline Poland: 116 123",
  "Romania": "Romanian Suicide Prevention Helpline: 0800 801 200",
  "Hungary": "Hungarian Suicide Prevention Helpline: 116 123",
  "Czech Republic": "Czech Suicide Prevention Helpline: 222 580 697",
  "Slovakia": "Slovak Suicide Prevention Helpline: 0800 800 800",
  "Lithuania": "Lithuanian Suicide Prevention Helpline: 800 60 000",
  "Latvia": "Latvia Suicide Prevention Helpline: 800 200 12",
  "Estonia": "Estonian Suicide Prevention Helpline: 126 877",
  "Belarus": "Belarus Suicide Prevention Helpline: 8-801-100-16-11",
  "Bulgaria": "Bulgaria Suicide Prevention Helpline: 0800 20 100",
  "Kazakhstan": "Kazakhstan Suicide Prevention Helpline: 8-800-080-98-99",
  "Kuwait": "Kuwait Suicide Prevention Helpline: 116 111",
  "Oman": "Oman Suicide Prevention Helpline: 800-7878",
  "Qatar": "Qatar Suicide Prevention Helpline: 16000",
  "Saudi Arabia": "Saudi Suicide Prevention Helpline: 920-022-559",
  "United Arab Emirates": "UAE Suicide Prevention Helpline: 800 4673",
  "Jordan": "Jordan Suicide Prevention Helpline: 0800-700-100",
  "Lebanon": "Lebanese Suicide Prevention Helpline: 1564",
  "Iraq": "Iraq Suicide Prevention Helpline: 0770-081-0505",
  "Syria": "Syria Suicide Prevention Helpline: 011-212-7417",
  "Afghanistan": "Afghanistan Suicide Prevention Helpline: 0700 010 181",
  "Bangladesh": "Bangladesh Suicide Prevention Helpline: 09612-219219",
  "Nepal": "Nepal Suicide Prevention Helpline: 1660 010 121",
  "Sri Lanka": "Sri Lanka Suicide Prevention Helpline: 1926",
  "Myanmar": "Myanmar Suicide Prevention Helpline: 01-223-5357",
  "Maldives": "Maldives Suicide Prevention Helpline: 1624",
  "Bhutan": "Bhutan Suicide Prevention Helpline: 17222219",
  "Laos": "Laos Suicide Prevention Helpline: 156",
  "Cambodia": "Cambodia Suicide Prevention Helpline: 012-733-233",
  "Mongolia": "Mongolia Suicide Prevention Helpline: 9141-5703",
  "Armenia": "Armenian Suicide Prevention Helpline: 116 11",
  "Georgia": "Georgia Suicide Prevention Helpline: 1515",
  "Azerbaijan": "Azerbaijan Suicide Prevention Helpline: 1-800-9111",
  "Turkmenistan": "Turkmenistan Suicide Prevention Helpline: 155 41",
  "Uzbekistan": "Uzbekistan Suicide Prevention Helpline: 114",
  "Kyrgyzstan": "Kyrgyzstan Suicide Prevention Helpline: 118",
  "Tajikistan": "Tajikistan Suicide Prevention Helpline: 8-800-204-000",
  "Moldova": "Moldova Suicide Prevention Helpline: 022 26 25 01",
  "Bahrain": "Bahrain Suicide Prevention Helpline: 800-800-888",
  "Malta": "Malta Suicide Prevention Helpline: 1777",
  "San Marino": "San Marino Suicide Prevention Helpline: 800-999-999",
  "Monaco": "Monaco Suicide Prevention Helpline: 01 45 39 40 00",
};
const cybersecurityHelplines = {
  "New Zealand": {
    helpline: "0800 CERT NZ (0800 237 869)",
    organization: "CERT NZ",
    website: "https://www.cert.govt.nz/"
  },
  "Malaysia": {
    helpline: "+60 1 300 88 2999",
    organization: "CyberSecurity Malaysia",
    website: "https://www.cybersecurity.my/"
  },
  "Indonesia": {
    helpline: "+62 21 381 0036",
    organization: "Indonesia Security Incident Response Team on Internet Infrastructure (ID-SIRTII)",
    website: "https://www.idsirtii.or.id/"
  },
  "Thailand": {
    helpline: "+66 2 123 1212",
    organization: "ThaiCERT",
    website: "https://www.thaicert.or.th/"
  },
  "Philippines": {
    helpline: "+63 2 426 1522",
    organization: "National Computer Emergency Response Team (NCERT)",
    website: "https://ncert.gov.ph/"
  },
  "Vietnam": {
    helpline: "1900 9191",
    organization: "Vietnam Computer Emergency Response Team (VNCERT)",
    website: "https://www.vncert.vn/"
  },
  "Saudi Arabia": {
    helpline: "19991",
    organization: "National Cybersecurity Authority (NCA)",
    website: "https://nca.gov.sa/"
  },
  "Egypt": {
    helpline: "+20 2 3534 1600",
    organization: "Egypt Computer Emergency Response Team (EG-CERT)",
    website: "https://www.egcert.eg/"
  },
  "Argentina": {
    helpline: "+54 11 3220 5220",
    organization: "Argentina's Computer Security Incident Response Team (ArCERT)",
    website: "https://www.argentina.gob.ar/modernizacion/ciberseguridad"
  },
  "Chile": {
    helpline: "+56 2 2890 0400",
    organization: "Cybersecurity Incident Response Center (CSIRT)",
    website: "https://csirt.gob.cl/"
  },
  "Ireland": {
    helpline: "+353 1 668 9675",
    organization: "National Cyber Security Centre (NCSC)",
    website: "https://www.ncsc.gov.ie/"
  },
  "Portugal": {
    helpline: "+351 211 947 100",
    organization: "Portuguese National Cybersecurity Centre (CNCS)",
    website: "https://www.cncs.gov.pt/"
  },
  "Poland": {
    helpline: "+48 22 521 6726",
    organization: "Polish Computer Emergency Response Team (CERT Polska)",
    website: "https://www.cert.pl/"
  },
  "Czech Republic": {
    helpline: "+420 541 110 777",
    organization: "National Cyber and Information Security Agency (NÚKIB)",
    website: "https://www.nukib.cz/"
  },
  "Hungary": {
    helpline: "+36 1 459 0900",
    organization: "Hungarian National Cyber Security Center",
    website: "https://www.nki.gov.hu/"
  },
  "Romania": {
    helpline: "+40 21 316 0521",
    organization: "Romanian National Computer Emergency Response Team (CERT-RO)",
    website: "https://www.cert.ro/"
  },
  "Bulgaria": {
    helpline: "+359 2 949 2351",
    organization: "Bulgarian Computer Emergency Response Team (CERT Bulgaria)",
    website: "https://www.gov.bg/"
  },
  "Ukraine": {
    helpline: "+380 44 594 8010",
    organization: "CERT-UA (Ukrainian Computer Emergency Response Team)",
    website: "https://cert.gov.ua/"
  },
  "Belarus": {
    helpline: "+375 17 239 7601",
    organization: "Operational and Analytical Center (OAC) CERT",
    website: "https://oac.gov.by/"
  },
  "Kazakhstan": {
    helpline: "+7 7172 718 311",
    organization: "National Cybersecurity Coordination Center (KZ-CERT)",
    website: "https://www.kz-cert.kz/"
  },
  "Kuwait": {
    helpline: "+965 188 9898",
    organization: "Kuwait Computer Emergency Response Team (K-CERT)",
    website: "https://www.kcert.org.kw/"
  },
  "Qatar": {
    helpline: "+974 4401 3300",
    organization: "Qatar Computer Emergency Response Team (Q-CERT)",
    website: "https://www.qcert.org.qa/"
  },
  "Bahrain": {
    helpline: "+973 1722 0220",
    organization: "Bahrain Computer Emergency Response Team (B-CERT)",
    website: "https://www.cert.bh/"
  },
  "Oman": {
    helpline: "+968 800 70000",
    organization: "Oman CERT",
    website: "https://www.cert.gov.om/"
  },
  "Yemen": {
    helpline: "+967 1 426 500",
    organization: "Yemen Computer Security Incident Response Team (YE-CERT)",
    website: "https://www.yecert.org/"
  },
  "Canada": {
    helpline: "1-888-232-6528",
    organization: "Canadian Cyber Incident Response Centre (CCIRC)",
    website: "https://www.cyber.gc.ca/"
  },
  "United States": {
    helpline: "1-844-887-0003",
    organization: "US-CERT (United States Computer Emergency Readiness Team)",
    website: "https://www.cisa.gov/uscert"
  },
  "Mexico": {
    helpline: "+52 800 890 9800",
    organization: "Police Cyber Unit",
    website: "https://www.gob.mx/ciberseguridad/"
  },
  "United Kingdom": {
    helpline: "0300 123 2040",
    organization: "National Cyber Security Centre (NCSC)",
    website: "https://www.ncsc.gov.uk/"
  },
  "France": {
    helpline: "01 70 19 22 22",
    organization: "ANSSI (National Agency for the Security of Information Systems)",
    website: "https://www.ssi.gouv.fr/"
  },
  "Germany": {
    helpline: "+49 30 185 200 0",
    organization: "Federal Office for Information Security (BSI)",
    website: "https://www.bsi.bund.de/"
  },
  "Belgium": {
    helpline: "+32 2 227 4444",
    organization: "CERT.be",
    website: "https://www.cert.be/"
  },
  "Luxembourg": {
    helpline: "+352 246 911",
    organization: "Security Incident Response Team (SIRT)",
    website: "https://www.sirt.public.lu/"
  },
  "Netherlands": {
    helpline: "+31 70 751 5555",
    organization: "National Cyber Security Centre (NCSC)",
    website: "https://english.ncsc.nl/"
  },
  "Switzerland": {
    helpline: "+41 58 466 2800",
    organization: "Swiss Government Computer Emergency Response Team (GovCERT.ch)",
    website: "https://www.govcert.admin.ch/"
  },
  "Australia": {
    helpline: "1300 292 371",
    organization: "Australian Cyber Security Centre (ACSC)",
    website: "https://www.cyber.gov.au/"
  },
  "Israel": {
    helpline: "+972 3 622 2424",
    organization: "Israel National Cyber Directorate",
    website: "https://www.gov.il/en/departments/national-cyber-directorate"
  },
  "Estonia": {
    helpline: "+372 627 4111",
    organization: "Estonian Information System Authority (RIA)",
    website: "https://www.ria.ee/"
  },
  "Latvia": {
    helpline: "+371 6704 2465",
    organization: "Latvian Information Technology Security Incident Response Team (CERT.LV)",
    website: "https://www.cert.lv/"
  },
  "Lithuania": {
    helpline: "+370 5 260 9936",
    organization: "National Cyber Security Centre (NCSC Lithuania)",
    website: "https://www.ncsc.lt/"
  },
  "Malta": {
    helpline: "+356 2124 3200",
    organization: "National Cyber Security Agency (NCSA)",
    website: "https://www.ncsa.gov.mt/"
  },
  "Cyprus": {
    helpline: "+357 22 801 271",
    organization: "Cyprus Computer Security Incident Response Team (CyCERT)",
    website: "https://www.cycert.gov.cy/"
  },
  "Sweden": {
    helpline: "+46 8 405 27 00",
    organization: "Swedish Civil Contingencies Agency (MSB)",
    website: "https://www.msb.se/"
  },
  "Norway": {
    helpline: "+47 22 22 80 00",
    organization: "Norwegian National Security Authority (NSM)",
    website: "https://www.nsm.stat.no/"
  },
  "Denmark": {
    helpline: "+45 35 29 81 00",
    organization: "Danish Centre for Cyber Security (CFCS)",
    website: "https://www.cfcs.dk/"
  },
  "Finland": {
    helpline: "+358 295 280 000",
    organization: "National Cyber Security Centre Finland (NCSC-FI)",
    website: "https://www.ncsc.fi/"
  },
  "Iceland": {
    helpline: "+354 460 7500",
    organization: "Computer Security Incident Response Team Iceland (CERT-IS)",
    website: "https://www.cert.is/"
  },
  "South Africa": {
    helpline: "+27 86 122 7223",
    organization: "South African Cyber Security Hub",
    website: "https://www.cybersecurityhub.gov.za/"
  },
  "Nigeria": {
    helpline: "+234 703 150 0817",
    organization: "Nigeria Computer Emergency Response Team (ngCERT)",
    website: "https://www.ngcert.gov.ng/"
  },
  "Kenya": {
    helpline: "+254 20 252 2289",
    organization: "Kenya Computer Incident Response Team (KE-CIRT)",
    website: "https://www.kecirt.go.ke/"
  },
  "Uganda": {
    helpline: "+256 414 234 999",
    organization: "Uganda Computer Emergency Response Team (UG-CERT)",
    website: "https://www.cert.go.ug/"
  },
  "Ghana": {
    helpline: "+233 302 968 543",
    organization: "Ghana Computer Emergency Response Team (GH-CERT)",
    website: "https://www.certghana.com/"
  }
};

const CountryHelpMenu = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  // Function to handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="country-help-container">
      <motion.div
        className="country-selection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Select Your Country</h2>
        <select onChange={handleCountryChange} value={selectedCountry}>
          <option value="">Select a country</option>
          {Object.keys(countryHelplines).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </motion.div>

      {selectedCountry && (
        <motion.div
          className="helplines"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Helplines for {selectedCountry}</h3>

          {/* Display Emotional Support Helpline */}
          <div className="helpline">
            <strong>Emotional Support:</strong>
            <p>{countryHelplines[selectedCountry]}</p>
          </div>

          {/* Display Cybersecurity Helpline if available */}
          {cybersecurityHelplines[selectedCountry] && (
            <div className="helpline">
              <strong>Cybersecurity Support:</strong>
              <p>{cybersecurityHelplines[selectedCountry].helpline}</p>
              <p><a href={cybersecurityHelplines[selectedCountry].website} target="_blank" className='text-white text-decoration-underline' rel=" noopener noreferrer">
                website : {cybersecurityHelplines[selectedCountry].organization}
              </a></p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CountryHelpMenu;
