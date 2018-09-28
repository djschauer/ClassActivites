package com.shapes;

import java.lang.Math;

class Triangle {

  Triangle (int sideLength, int sides) {
    this.mSideLength = int sideLength;
    this.sSides = int sides;
    this.area = 0.5 * this.mSideLength * this.getHeight();
  }

  private double getHeight () {
    return this.mSideLength * Math.sin(Math.toRadians(60));
  }

}
