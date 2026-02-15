import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: '🌐',
      title: 'Web Application Development',
      description: 'Custom web applications tailored to your business needs, built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Modern Frameworks (Angular, React, Vue)',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Content Management Systems'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'User-Centric Design',
        'App Store Optimization',
        'Ongoing Support & Maintenance'
      ]
    }
  ];
}
