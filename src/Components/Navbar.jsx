import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-2xl font-semibold">
      <nav className="flex justify-between items-center">
        <div className="Logo-wrapper ">
          <h1 className="Logo">Judicio</h1>
        </div>
        <ul className="flex justify-center gap-4 text-xl">
          <li>
            <a className="proj-name" href="/">
              Home
            </a>
          </li>
    
            <>
              <li>
                <a href="/About">Docs</a>
              </li>
              <li>
                <a href="/prisoner">Get Verdict</a>
              </li>
            </>
        

        
            <>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/verdictspassed">Verdicts Passed</a>
              </li>
              <li>
                <a href="/addprisoner">Add Prisoner</a>
              </li>
              <li>
                <a href="/updateprisoner">Update Prisoner</a>
              </li>
              <li>
                <a href="/eligiblecriminals">Eligibility</a>
              </li>
            </>


            <>
              <li>
                <a href="/verdictspassed">Verdicts Passed</a>
              </li>
              <li>
                <a href="/addprisoner">Add Prisoner</a>
              </li>
              <li>
                <a href="/updateprisoner">Update Prisoner</a>
              </li>
              <li>
                <a href="/eligiblecriminals">Eligibility</a>
              </li>
            </>
                    
            <>
              <li>
                <a href="/prisoner">Get Verdict</a>
              </li>

              <li>
                <a href="/aboutbail">Information</a>
              </li>
            </>
            <li>
                <a href="/login">Login</a>
            </li>
      
        </ul>
   
      </nav>
    </div>
  );
};

export default Navbar;
