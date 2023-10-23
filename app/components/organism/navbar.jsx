"use client";

import { useState } from "react";

export default function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    isUserLoggedIn && (
      <div>
        <div className="navbar">
          <ul>
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </div>
      </div>
    )
  );
}
