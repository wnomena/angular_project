import { Component, OnInit } from '@angular/core';
import { member_model } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-member-manager',
  standalone: true,
  imports: [NgFor],
  templateUrl: './member-manager.component.html',
  styleUrl: './member-manager.component.css'
})
export class MemberManagerComponent implements OnInit{
  list_table: member_model[] | undefined
  ngOnInit(){
    //chargement de membre pour les modifier par la suite ou les effacer
    this.list_table = [{nom_complet : "RAKOTOARIMALALA",mot_de_passe : "RAKOTOARIMALALA",mail : "wnomena58@gmail.com"}]
  }
  
  deletion_of_commentary_by_id(member_mail:string) {
    //route pour l effacement des donnes via  une requette delete et un identifiant stocker dans un variable local
  }
}
