Feature: Group Ordering As Guest

	Scenario: Login as a guest
		Given I Navigate to "https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor"
		When Presented with the signing modal
		Then I sign select sign in as a guest
		And I am able to sign in as a guest

	Scenario: Adding items
		Given I've signed in a guest
		When I select an item with no options
		Then That item is added to the cart

	Scenario: Checking out
		When I've finished ordering and checkout
		Then I am prompted for cutlery
		And I'm able to accept and finish the checkout proces
		And Order is placed successfully