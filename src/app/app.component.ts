import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'JAR Solutions';
  
  ngOnInit() {
    // Add click event listener for clearance button across all pages
    this.setupClearanceButton();
  }

  setupClearanceButton() {
    // Use MutationObserver to detect when button is added to DOM
    const observer = new MutationObserver(() => {
      const clearanceBtn = document.getElementById('clearanceBtn');
      if (clearanceBtn && !clearanceBtn.hasAttribute('data-initialized')) {
        clearanceBtn.setAttribute('data-initialized', 'true');
        clearanceBtn.addEventListener('click', () => {
          // Placeholder for link - user will add the actual link
          // alert('Please configure the link to your Student Clearance System');
          // When user adds the link, replace with:
          // window.location.href = 'YOUR_CLEARANCE_SYSTEM_URL';
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}
