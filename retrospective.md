# Sprint 2 Review

## 1. What went well in the previous sprint?

- **Good Scope Planning**: We improved our planning by a lot after our big planning session we know exactly where our game direction is going to go and we are excited to implement it. Last sprint we had very little 

- **Communication**: I felt I was able to communicate my goals for the sprint very effectively when talking to you. Since I was able to pull up the project plan and describe how my goal will meet the individuals requirements.

- **CSS**: This sprint I put a lot more effort into finalizing the css or getting a better start on it and I am really proud of what I accomplished this sprint. 

## 2. What could have gone better in the previous sprint?

- **Initial Individual Planning**: I initially tried to bundle all the caching logic into SavedLogins.tsx, but realized it made more sense to keep it in the Login.tsx component. This resulted in some wasted effort and could have been avoided with better upfront planning about component responsibilities.

- **Understanding of Core Concepts**: I had some confusion about whether localStorage should be managed in the child or parent component, which made me go down a rabbit hole making multiple versions before settling on the final approach. Better understanding of React data flow patterns would have saved soooooooo much time.

- **Testing Across Different Scenarios**: I didn't initially consider what happens when localStorage data is corrupted or when there are no saved users. I had to add fallback logic and error handling after the fact rather than designing for these cases from the start.

## 3. What can be done in the next sprint to improve my process?

- **Create Diagrams**: Since I wasted time refactoring the localStorage logic between components, I will create component diagrams showing each of my features in Sprint 4. Specifically I will document which component has which state and draw arrows showing prop flow. I'll have these diagrams reviewed and approved by at least one teammate in our Sprint 4 planning meeting before writing any implementation code.

- **Make Test scenarios**: Because I retroactively make tests, I will write out exactly 3 documented test scenarios (one happy path, two error cases) as code comments before implementing any useEffect or useState logic in Sprint 4. By the Sprint 4 review, I want to show that every piece of code works with these scenarios, and I'll verify this by doing a self code review before submitting my PRs.

- **Watch Videos Before Applying Concepts to Project**: Since for the second time this term I struggled with understanding core concepts this sprint being useEffect and localStorage patterns, causing me to create multiple iterations, I will identify a few videos to cover the concepts needed for my Sprint 4 tasks. Before starting any project work, I will complete those specific lab exercises and create a working demo that implements the same pattern in isolation. I'll only begin project implementation after successfully watching 2 videos on each key concept.