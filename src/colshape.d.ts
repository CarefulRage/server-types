declare namespace CarefulRage.Colshape {
    type ModelHashes = 'circle' | 'cuboid' | 'polygon' | 'rectangle' | 'sphere' | 'tube';

    const enum Models {
        CIRCLE = 'circle',
        CUBOID = 'cuboid',
        POLYGON = 'polygon',
        RECTANGLE = 'rectangle',
        SPHERE = 'sphere',
        TUBE = 'tube'
    }

    type Model = CarefulRage.Colshape.ModelHashes | CarefulRage.Colshape.Models;
}