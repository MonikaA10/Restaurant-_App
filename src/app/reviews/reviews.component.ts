import { Component } from '@angular/core';

interface Review {
  name: string;
  comment: string;
  rating: number;
}


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  reviews: Review[] = [
    { name: 'John Doe', comment: 'Great food and service!', rating: 5 },
    { name: 'Jane Smith', comment: 'Loved the ambiance!', rating: 4 }
  ];

  newReview: Review = { name: '', comment: '', rating: 0 };

  addReview() {
    if (this.newReview.name && this.newReview.comment && this.newReview.rating) {
      this.reviews.push({ ...this.newReview });
      this.newReview = { name: '', comment: '', rating: 0 };
    }
  }
}
