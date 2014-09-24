# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(username: "mike", password: "testing")
u2 = User.create(username: "jimmy", password: "testing")
u3 = User.create(username: "eric", password: "testing")
u4 = User.create(username: "rob", password: "testing")
u5 = User.create(username: "yusuf", password: "testing")
u6 = User.create(username: "guest", password: "welcome")

b1 = Business.create(name: "Saigon Manwich", b_type: "Restaurants", price: 1)
b2 = Business.create(name: "Philz", b_type: "Coffee & Tea", price: 2)
b3 = Business.create(name: "Tropisueno", b_type: "Restaurants", price: 3)
b4 = Business.create(name: "Elbow Room", b_type: "Bars & Nightlife", price: 2)
b5 = Business.create(name: "Showdogs", b_type: "Restaurants", price: 2)
b6 = Business.create(name: "Tempest", b_type: "Bars & Nightlife", price: 2)
b7 = Business.create(name: "In-N-Out", b_type: "Restaurants", price: 1)
b8 = Business.create(name: "Random Moving Company", b_type: "Home Services", price: 4)
b9 = Business.create(name: "Plump Plumbers", b_type: "Home Services", price: 1)
b10 = Business.create(name: "Heaven's Donuts", b_type: "Bakeries", price: 1)
b11 = Business.create(name: "Little Sheep Hot Pot", b_type: "Restaurants", price: 3)
b12 = Business.create(name: "Real Bakery", b_type: "Bakeries", price: 1)
b13 = Business.create(name: "Noc Noc", b_type: "Bars & Nightlife", price: 1)
b14 = Business.create(name: "Five Guys", b_type: "Restaurants", price: 1)
b15 = Business.create(name: "SF MOMA", b_type: "Arts & Entertainment", price: 1)
b16 = Business.create(name: "World of Noodle", b_type: "Restaurants", price: 4)
b17 = Business.create(name: "Señor Sisig", b_type: "Food Carts", price: 1)

r1 = Review.create(content: "this place is da bomb", stars: 5, user_id: 1, business_id: 1, go_again: true)
r2 = Review.create(content: "i think someone spit in my food", stars: 1, user_id: 3, business_id: 1, go_again: true)
	r2.toggle!(:go_again)
r3 = Review.create(content: "i feel neutral about this experience", stars: 3, user_id: 4, business_id: 1, go_again: true)
r4 = Review.create(content: "eh...", stars: 2, user_id: 5, business_id: 1, go_again: true)
	r4.toggle!(:go_again)
r5 = Review.create(content: "mmmm coffee. gettin mah fix", stars: 5, user_id: 3, business_id: 2, go_again: true)
r6 = Review.create(content: "everything is okay when i drink", stars: 4, user_id: 1, business_id: 4, go_again: true)
