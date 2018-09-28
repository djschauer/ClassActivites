package com.shapes;

import java.lang.Math;

class Shape {
    private final int mSideLength;

    private static final int sSides;

    private static final double area;

    int perimeter() {
        return this.mSideLength * this.sSides;
    }

    int sides() {
        return this.sSides;
    }

    int area() {
        return this.area;
    }
}