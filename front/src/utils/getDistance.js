/*
    расстояние по координатам
    d = √[(x2 − x1)² + (y2 − y1)²]
*/

export const getDistance = (a, b) => {
    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
}