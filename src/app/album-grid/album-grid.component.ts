import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { typeofquality } from '../../simple_animation/animation';

@Component({
  selector: 'app-album-grid',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './album-grid.component.html',
  styleUrl: './album-grid.component.css'
})
export class AlbumGridComponent {
  items_1: typeofquality = {title : "Safety First:" ,content : "We prioritize the safety of our travelers at every step of their adventure. Our tours are carefully planned to minimize risks and provide a worry-free experience."}
  items_2: typeofquality = {title : "Local Expertise: " ,content : " With years of on-the-ground experience, our team knows Madagascar inside and out. Our local guides are passionate experts who will help you discover hidden treasures and share the island's secrets with you."}
  items_3: typeofquality = {title : "Personalized Journeys: " ,content : " Every traveler is unique, and we believe every adventure should be too. We offer tailor-made tours that are adapted to your desires and pace, ensuring a truly unforgettable experience."}
  items_4: typeofquality = {title : "Environmental Respect: " ,content : "By choosing our agency, you are opting for responsible tourism. We are committed to protecting the environment and promoting sustainable practices that benefit both nature and local communities."}
  items_5: typeofquality = {title : "Transparent Pricing: " ,content : "No unpleasant surprises with us! Our pricing is transparent, with no hidden fees, so you can travel with peace of mind."}


}
