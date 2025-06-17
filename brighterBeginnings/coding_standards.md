# Brighter Beginnings Website
We are revamping Brighter Beginnings website to look more modern and highlight features of business to attract more clients
## Standards

### Github workflow
- make branch from dev, naming feature (ie:navbar-update,login-form,etc)
- pull from dev branch before merging and solve and merge conflicts
- for deployment, merge dev branch to main
- be mindful of downloading libraries


### Naming conventions
- classnames should be every new work "-" (i.e navbar-header)
- functions camal case
- variables camal case
- files camal case
- specificity over concise
- be intentional of using general vs unique names (ie uploadData vs uploadUserData)

### Component Structure
- almost all items rendered should have a div
- every div should have class/id that clearly showcases use (ie. button-container, button-element)
- follow structure =>
- <div class="navbar-container">    
      <div class="navbar-header" >
        im the header
      </div>
      <div class="navbar-content" >
          
            <div class="navbar-title" >
                title
            </div>
        
              <div class="navbar-button" >
                  Click here
              </div>
        </div>
    < /div>

### Styling
- use bootstrap in-class styling for relatively simple styling
- in-line styling for up to two styles that isn't possilbe with bootstrp
- in-depth styling or not possible with bootstrap and 3 or more, use css

### Project Structure
- be thoughtful about pages vs components
- when possible make components and functions (via flux) reuseable
- all photos stored in assets with folder structure
- store assets/media based on their category.



### Logic Flow
- Use the functions/methods wisely and avoid repeating yourself.
- All functions should be checking for errors on what it's being called for.
  
