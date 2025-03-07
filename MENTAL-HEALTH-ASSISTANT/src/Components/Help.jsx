import React from 'react'
import CountryHelplineMenu from './CountryHelpMenu';
const Help = () => {
    return (
        <div>
            <h1>NEED URGENT HELP?</h1>
            <h2>Here are some helplines you can reach out to:</h2>
            <ul>
                <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">National Helpline for Mental Health Support (1-800-662-HELP)</a></li>
                <li><a href="https://www.nami.org/Support-Education/NAMI-HelpLine" target="_blank" rel="noopener noreferrer">NAMI HelpLine (1-800-950-NAMI)</a></li>
                <li><a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer">Crisis Text Line (Text HOME to 741741)</a></li>
                <li><a href="https://www.mentalhealth.gov/get-help/immediate-help" target="_blank" rel="noopener noreferrer">Immediate Help (911)</a></li>
            </ul>
            <h4>Select Your country</h4>
            <CountryHelplineMenu />
        </div>
    )
}

export default Help
