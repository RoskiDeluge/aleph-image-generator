# imginate

A snapshot camera for the AI era.

Create images with AI that can remember and are remembered.

The two primitives of the app are moods and modes. Moods are similar to categories in that they are collections of related modes. 
A mode is a combination of a prompt and an image.

Usage:
- A user creates a mode by generating a prompt which in turn generates an image
- Collections of modes are categorized into moods. 
- Over time the system learns from the moods and makes prompt suggestions that match the user's preferences as captured in their moods.

To Do:
- Authentication (NextAuth)
- Persistence: add tables in db for users, images, prompts
- Better loading state notifications in UI
- Add subscription tiers 
- Add social sharing feature

Future features:
- Improve UI design (Precedent, shadcn/ui)
- Add multi-modal vector db to upsert mode embeddings
- Build API for programmatic access

