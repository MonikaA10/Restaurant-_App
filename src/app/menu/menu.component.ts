import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  price: number;
  description: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu: MenuCategory[] = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Garlic Bread', price: 5.99, description: 'Crispy garlic bread with melted cheese.' },
        { name: 'Spinach and Artichoke Dip', price: 8.99, description: 'Rich and creamy dip served with tortilla chips.' },
        { name: 'Calamari Fritti', price: 12.99, description: 'Crispy fried squid with marinara sauce.', },
        { name: 'Loaded Nachos', price: 9.99, description: 'Tortilla chips topped with cheese, jalapeños, salsa, and sour cream.' },
        { name: 'Chicken Wings', price: 11.99, description: 'Crispy chicken wings with your choice of sauce.' },
        { name: 'Onion Rings', price: 6.99, description: 'Crispy onion rings with a tangy dipping sauce.' }

      ]
    },
    {
      title: 'Main Courses',
      items: [
        { name: 'Margherita Pizza', price: 12.99, description: 'Classic pizza with tomato sauce, mozzarella, and basil.' },
        { name: 'Hummus and Pita Bread', price: 6.99, description: 'Creamy chickpea dip served with warm pita bread.' },
        { name: 'Chicken Alfredo', price: 15.99, description: 'Creamy pasta with grilled chicken.' },
        { name: 'Spaghetti Bolognese', price: 14.99, description: 'Classic Italian pasta with meat sauce.' },
        { name: 'Grilled Salmon', price: 18.99, description: 'Salmon fillet with lemon-dill sauce.' },
        { name: 'Steak Diane', price: 24.99, description: 'Tender steak with mushroom sauce.' },
        { name: 'Vegetarian Lasagna', price: 16.99, description: 'Layered pasta with vegetables and cheese.'},
        { name: 'Chicken Caesar Salad', price: 13.99, description: 'Crisp romaine lettuce with grilled chicken and Caesar dressing.'}
      ]


    },
    {
      title: 'Desserts',
      items: [
        { name: 'Tiramisu', price: 6.99, description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.' },
        { name: 'Chocolate Lava Cake', price: 8.99, description: 'Warm chocolate cake with molten chocolate center.' },
        { name: 'Cheesecake', price: 7.99, description: 'Classic cheesecake with various toppings.' },
        { name: 'Apple Pie', price: 6.99, description: 'Warm apple pie with vanilla ice cream.'},
        { name: 'Chocolate Brownie', price: 4.99, description: 'Rich chocolate brownie with ice cream.' },
        { name: 'Pancakes', price: 9.99, description: 'Fluffy pancakes with syrup and butter.' },
        { name: 'Ice Cream Sundae', price: 7.99, description: 'Customizable ice cream sundae.' }
      ]
    }
  ];
}
