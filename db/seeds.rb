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

b1 = Business.create(name: "Saigon Manwich", b_type: "Restaurants", price: 1)
b2 = Business.create(name: "Philz", b_type: "Coffee & Tea", price: 2)
b3 = Business.create(name: "Tropisueno", b_type: "Restaurants", price: 3)
b4 = Business.create(name: "Elbow Room", b_type: "Bars & Nightlife", price: 2)
b5 = Business.create(name: "Showdogs", b_type: "Restaurants", price: 2)
b6 = Business.create(name: "Tempest", b_type: "Bars & Nightlife", price: 2)
b7 = Business.create(name: "In-N-Out", b_type: "Restaurants", price: 1)

r1 = Review.create(content: "this place is da bomb", stars: 5, user_id: 1, business_id: 1, go_again: true)
r2 = Review.create(content: "i think someone spit in my food", stars: 1, user_id: 3, business_id: 1, go_again: true)
	r2.toggle!(:go_again)
r3 = Review.create(content: "i feel neutral about this experience", stars: 3, user_id: 4, business_id: 1, go_again: true)
r4 = Review.create(content: "eh...", stars: 2, user_id: 5, business_id: 1, go_again: true)
	r4.toggle!(:go_again)
r5 = Review.create(content: "mmmm coffee. gettin mah fix", stars: 5, user_id: 3, business_id: 2, go_again: true)
r6 = Review.create(content: "everything is okay when i drink", stars: 4, user_id: 1, business_id: 4, go_again: true)
