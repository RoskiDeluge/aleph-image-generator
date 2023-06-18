# imginate repo

A camera for the AI era.

Create images with AI that can remember and are remembered.

The two data primitives of the app are moods and modes. Moods are similar to categories in that they are collections of related modes. 
Modes are composed of prompts and images. 

Usage:
- A user creates a mode by generating a prompt which in turn generates an image
- Collections of modes are categorized into moods over time 
- Over time the system learns from the modes and makes prompt suggestions that match the user's preferences

To Do:

- Add context array and a messages table in an Azure db to retain context history / memory of previous prompts
- Add vector db for prompt embeddings
- (When available) add image embeddings to the vector db so the system develops a visual memory of previous images
- Find a way to combine these embeddings so the prompt embeddings and image embeddings can talk to each other
- Build API for programmatic access

