import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Legalese.css';

export default function TOSPage() {
    return (
        <div id="terms-of-service" className="legalese">
            <h1>LP Timer Terms and Conditions of Use</h1>
            <h2>1. Terms</h2>
            <p>By accessing this Website, accessible from kroljs.com/LP-Timer, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and licensing law.</p>
            <h2>2. Eligibility</h2>
            <p>With the explicit exception of feedback submission through the form located at kroljs.com/LP-Timer/#/about or any other means of submitting Personal Idenitifiable Information ("PII"), this web application is intended for and directed to all global residents and users. By electing to submit feedback and/or "PII" through any means to LP Timer or its affiliate(s), you certify that you are a resident of the United States over the age of 13. Please read our <Link to="/privacy">Privacy Policy</Link> to learn more about these restrictions and how we handle your information.</p>
            <h2>3. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on LP Timer's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on LP Timer's Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This will let LP Timer to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
            <h2>4. Disclaimer</h2>
            <p>All the materials on LP Timer’s Website are provided "as is". LP Timer makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, LP Timer does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
            <h2>5. Limitations</h2>
            <p>LP Timer or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on LP Timer’s Website, even if LP Timer or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
            <h2>6. Revisions and Errata</h2>
            <p>The materials appearing on LP Timer’s Website may include technical, typographical, or photographic errors. LP Timer will not promise that any of the materials in this Website are accurate, complete, or current. LP Timer may change the materials contained on its Website at any time without notice. LP Timer does not make any commitment to update the materials.</p>
            <h2>7. Site Terms of Use Modifications</h2>
            <p>LP Timer may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
            <h2>8. Your Privacy</h2>
            <p>Please read our <Link to="/privacy">Privacy Policy</Link>.</p>
            <h2>9. Governing Law</h2>
            <p>Any claim related to LP Timer's Website shall be governed by the laws of us without regards to its conflict of law provisions.</p>
        </div>
    )
}