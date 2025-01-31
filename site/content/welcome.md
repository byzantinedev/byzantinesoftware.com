+++
title = "Welcome"
date = 2025-01-29
+++

Hi! Welcome to my blog. I'm ByantineDev and I'm really excited to share with you what I'm beginning to work on: Vloxverse, a novel creative sandbox based on subdivisible voxels. What does that mean? Let's break it down.

First, let's talk about voxels. Voxels are kind of like 3d pixels. The word voxels comes from 'volume' and 'pixels'. You can see these in games like Minecraft where the entire world is made of cubes that players can place or remove. 

The thing is, voxels seem simple conceptually, but in practice they are actually quite complex to implement. A naive implementation (just storing the value for each coordinate) won't get you very far before you run into hardware limitations. Fortunately, there are a ton of optimizations that can be done to reduce resource requirements dramatically - by several order of magnitude even. It is in these optimization techniques that lies all the complexity.

One common optimization is the sparse voxel octree. It turns out in a lot of cases you find clusters of voxels with the same value. The idea is if you can group voxels, you only need to store the value once for that cluster of coordinates. Since a cube can be subdivided into 8 equal cubes, you can form a sparse octree. (tree structure with upto 8 branches at each level) When multiple branches have the same value, you don't need to store all 8 branches since you can group those.

Using sparse voxel octrees to reduce data storage requirements is one thing, but Vloxverse goes one step further. One common bottleneck with voxels is that the level of detail is the same at any distance. Naturally, the detail from voxels that are far can't be fully appreciated because of their distance. That excessive detail at far distances is a burder on mesh computations and number of faces to render. By leveraging the voxel octree, we can get an approximation of a value for a cluster of voxels by not traversing the tree all the way down. The result is rendering variable sizes of voxels base on distance from the camera.

So, what is a Vlox? The word comes from 'voxel' and 'blocks' They are those variable size voxels I mentioned. Vloxverse also allows the player to select the level of detail when editing the terrain, so they can build with as much detail as they need to.

Although it's still a work in progress, if you're curious feel free to have a look: [https://vloxverse.com](https://vloxverse.com)
