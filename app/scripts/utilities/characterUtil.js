class CharacterUtil {
    checkForStutter(position, oldPosition) {
        let stutter = false;
        const threshold = 5;

        if (Math.abs(position['top'] - oldPosition['top']) > threshold || Math.abs(position['left'] - oldPosition['left']) > threshold) {
            stutter = true;
        }

        return stutter ? 'hidden' : 'visible';
    }

    getPropertyToChange(direction, directions) {
        switch(direction) {
            case directions.up:
            case directions.down:
                return 'top';
            default:
                return 'left';
        }
    }

    getVelocity(direction, directions, velocityPerMs) {
        switch(direction) {
            case directions.up:
            case directions.left:
                return velocityPerMs * -1;
            default:
                return velocityPerMs;
        }
    }

    calculateNewDrawValue(interp, prop, oldPosition, position) {
        return oldPosition[prop] + (position[prop] - oldPosition[prop]) * interp;
    }

    determineGridPosition(currentPosition, scaledTileSize) {
        return {
            x : (currentPosition.left / scaledTileSize) + 0.5,
            y : (currentPosition.top / scaledTileSize) + 0.5
        };
    }

    turningAround(direction, directions, desiredDirection) {
        switch(direction) {
            case directions.up:
                return desiredDirection === directions.down;
            case directions.down:
                return desiredDirection === directions.up;
            case directions.left:
                return desiredDirection === directions.right;
            default:
                return desiredDirection === directions.left;
        }
    }

    getOppositeDirection(direction, directions) {
        switch(direction) {
            case directions.up:
                return directions.down;
            case directions.down:
                return directions.up;
            case directions.left:
                return directions.right;
            default:
                return directions.left;
        }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = CharacterUtil;
}