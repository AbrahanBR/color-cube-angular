import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColorCubeService } from '../color-cube/color-cube.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-management',
  templateUrl: './color-management.component.html',
  styleUrls: ['./color-management.component.scss']
})
export class ColorManagementComponent implements OnInit {
  public isNewColor = true;
  public name: string;
  public showModal = false;
  public color = '#FFFFFF';

  private id: number;

  constructor(
    private colorCubeService: ColorCubeService,
    private router: Router,
    private acvatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.acvatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.isNewColor = false;
      this.colorCubeService.getColor(this.id).subscribe(({ name, color }) => {
        this.name = name;
        this.color = color;
      });
    }
  }

  onCancel() {
    // TODO: chamar modal de cancelameno.
  }

  private submitNewColor(name: string, color: string) {
    this.colorCubeService.createColor(name, color).subscribe(
      () => {
        this.router.navigate(['/list']);
      },
      err => {
        alert('aconteceu alguma coisa errada.');
        console.error(err);
      }
    );
  }

  private submitEditColor(id: number, name: string, color: string) {
    this.colorCubeService.editColor(id, name, color).subscribe(
      () => {
        this.router.navigate(['/list']);
      },
      err => {
        alert('aconteceu alguma coisa errada.');
        console.error(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    // TODO: chamar BE para salvar a cor.
    const { name, color } = form.value;

    if (this.isNewColor) {
      this.submitNewColor(name, color);
    } else {
      this.submitEditColor(this.id, name, color);
    }
  }
}
