/// <reference path="./src/base.d.ts" />
/// <reference path="./src/blip.d.ts" />
/// <reference path="./src/checkpoint.d.ts" />
/// <reference path="./src/colshape.d.ts" />
/// <reference path="./src/entity.d.ts" />
/// <reference path="./src/marker.d.ts" />
/// <reference path="./src/object.d.ts" />
/// <reference path="./src/ped.d.ts" />
/// <reference path="./src/player.d.ts" />
/// <reference path="./src/vehicle.d.ts" />
/// <reference path="./src/weapon.d.ts" />
/// <reference path="./src/weather.d.ts" />

declare type Array2d = [number, number];
declare type Array3d = [number, number, number];
declare type Array4d = [number, number, number, number];

declare type KeyValueCollection = { [key: string]: any };

declare interface IVector3 {
	x: number;
	y: number;
	z: number;
}

declare type PlayerWeaponCollection = {
	current: number;
	reset(): void;
};

/**
 * Class Vector is a three-dimensional coordinate, most often used
 * to find the position of an object and distance between objects.
 * [Vector3](https://wiki.rage.mp/index.php?title=Server-side_functions#Vector3);
 */
declare class Vector3 {
	public x: number;
	public y: number;
	public z: number;

	constructor(x: number, y: number, z: number);
	constructor(arr: Array3d);
	constructor(obj: IVector3);
	/**
	 * [vector.add](https://wiki.rage.mp/index.php?title=Vector3::add):
	 * This function is used to add a Vector3 to another Vector3 or scalar.
	 * @example
	 * const vec1 = new mp.Vector3(10, 30, 100);
	 * const vec2 = new mp.Vector3(40, 20, 60);
	 *
	 * const total = vec1.add(vec2); // total = {x: 50, y: 50, z: 160}
	 * @example
	 * const vec1 = new mp.Vector3(10, 30, 100);
	 * const scalar = 20;
	 *
	 * const total = vec1.add(scalar); // total = {x: 30, y: 50, z: 120}
	 * @example This will throw all players 500 units into the air.
	 * mp.players.forEach(player => {
	 *     player.position = player.position.add(new mp.Vector3(0, 0, 500));
	 * });
	 * @param vector {Vector3 | number } The vector or scalar to be added to the callee.
	 * @returns Vector3
	 */
	add(vector: Vector3 | number): Vector3;
	/**
	 * [vector.angleTo()](https://wiki.rage.mp/index.php?title=Vector3::angleTo):
	 * This function returns the angle (in radians) between two vectors.
	 * @example
	 * vector.angleTo(Vector3 vector);
	 * @param vector {Vector3}
	 * @returns {number} The angle (in radians) between two vectors.
	 */
	angleTo(vector: Vector3): number;
	/**
	 * [vector.clone](https://wiki.rage.mp/index.php?title=Vector3::clone):
	 * This function returns a copy of a Vector3.
	 * @example
	 * vector.clone();
	 * @returns Vector3
	 */
	clone(): Vector3;
	/**
	 * [vector.cross](https://wiki.rage.mp/index.php?title=Vector3::cross):
	 * This function is used to calculate the cross product of two vectors.
	 * The cross product is a vector that is perpendicular to both input vectors.
	 * @example
	 * vector.cross(Vector3 vector);
	 * @param vector {Vector3}.
	 */
	cross(vector: Vector3): Vector3;

	/**
	 * [vector.divide](https://wiki.rage.mp/index.php?title=Vector3::divide):
	 * This function is used to divide a Vector3 by another Vector3 or scalar.
	 * @example
	 * const vec1 = new mp.Vector3(50, 10, 30);
	 * const vec2 = new mp.Vector3(10, 20, 15);
	 *
	 * const quotient = vec1.divide(vec2); // quotient = {x: 5, y: 2, z: 2}
	 * @example
	 * const vec1 = new mp.Vector3(50, 40, 30);
	 * const scalar = 10;
	 *
	 * const quotient = vec1.divide(scalar); // quotient = {x: 5, y: 4, z: 3}
	 * @param vector {Vector3 | number} The vector or scalar to divide the callee by.
	 * @returns {Vector3}
	 */
	divide(vector: Vector3 | number): Vector3;

	/**
	 * [vector.dot](https://wiki.rage.mp/index.php?title=Vector3::dot):
	 * This function is used to calculate the dot product of two vectors.
	 * The dot product is a number calculated by multiplying the magnitudes of both vectors together, then multiplying that number by cosine of the angle between them.
	 * For normalized vectors, the dot product will be:
	 *
	 *    -1 - If the vectors point in the exact opposite direction ᅟᅟᅟᅟ ᅟᅟᅟᅟ ᅟᅟ
	 *    0 - If the vectors are perpendicular ᅟᅟᅟᅟ ᅟᅟᅟᅟ ᅟᅟᅟᅟ ᅟᅟᅟᅟ ᅟᅟ  ᅟ
	 *    1 - If the vectors point the same direction
	 * @example
	 * vector.dot(Vector3 vector);
	 * @param vector {Vector3}
	 */
	dot(vector: Vector3): number;

	/**
	 * [vector.equals](https://wiki.rage.mp/index.php?title=Vector3::equals):
	 * This function is used to test where two Vector3s equal each other.
	 * @example
	 * const vec1 = new mp.Vector3(5, 5, 5);
	 * const vec2 = new mp.Vector3(5, 5, 5);
	 *
	 * vec1.equals(vec2); // true
	 * vec1.equals(new mp.Vector3(0, 0, 0)); // false
	 * @param vector {Vector3}
	 */
	equals(vector: Vector3): boolean;

	/**
	 * [vector.length](https://wiki.rage.mp/index.php?title=Vector3::length):
	 * This function returns the magnitude of a Vector3.
	 * It's calculated by square rooting the result of x * x + y * y + z * z.
	 * @example
	 * const vec1 = mp.players.at(0).position;
	 * const vec2 = mp.players.at(1).position;
	 *
	 * const distance = vec1.subtract(vec2).length();
	 *
	 * // distance is the distance between the two players
	 * @returns The magnitude of a Vector3
	 */
	length(): number;
	/**
	 * [vector.max](https://wiki.rage.mp/index.php?title=Vector3::max):
	 * This function returns the maximum partial of a Vector3.
	 * @example
	 * const vec1 = new mp.Vector3(10, 30, 100);
	 *
	 * const maximum = vec1.max(); // maximum = 100
	 * @returns The maximum partial of a Vector3
	 */
	max(): number;

	/**
	 * [vector.min](https://wiki.rage.mp/index.php?title=Vector3::min):
	 * This function returns the minimum partial of a Vector3.
	 * @example
	 * const vec1 = new mp.Vector3(10, 30, 100);
	 *
	 * const minimum = vec1.min(); // minimum = 10
	 * @returns The minimum partial of a Vector3
	 */
	min(): number;
	/**
	 * [vector.multiply](https://wiki.rage.mp/index.php?title=Vector3::multiply):
	 * This function is used to multiply a Vector3 by another Vector3 or scalar.
	 * @example #1
	 * const vec1 = new mp.Vector3(100, 100, 100);
	 * const vec2 = new mp.Vector3(2, 3, 4);
	 *
	 * const product = vec1.multiply(vec2); // total = {x: 200, y: 300, z: 400}
	 * @example #2
	 * const vec1 = new mp.Vector3(20, 40, 60);
	 * const scalar = 2;
	 *
	 * const product = vec1.multiply(scalar); // total = {x: 40, y: 80, z: 120}
	 * @param vector {Vector3 | number} The vector or scalar to be added to the callee.
	 */
	multiply(vector: Vector3 | number): Vector3;

	/**
	 * [vector.negative](https://wiki.rage.mp/index.php?title=Vector3::negative):
	 * This function returns the opposite of a Vector3 by flipping the sign of each partial.
	 * The same affect can be achieved by multiplying a vector by -1.
	 * @example
	 * const vec1 = new mp.Vector3(10, 30, 100);
	 * const vec2 = new mp.Vector3(-50, -30, 40);
	 *
	 * const opposite1 = vec1.negative(); // { x: -10, y: -30, z: -100 }
	 * const opposite2 = vec2.negative(); // { x: 50, y: 30, z: -40 };
	 * @returns The opposite of a Vector3 by flipping the sign of each partial
	 */
	negative(): Vector3;

	/**
	 * [vector.subtract](https://wiki.rage.mp/index.php?title=Vector3::subtract):
	 * This function is used to subtract a Vector3 or scalar from another Vector3.
	 * @example
	 * const vec1 = new mp.Vector3(50, 40, 30);
	 * const vec2 = new mp.Vector3(10, 20, 15);
	 *
	 * const difference = vec1.subtract(vec2); // difference = {x: 40, y: 20, z: 15}
	 * @example
	 * const vec1 = new mp.Vector3(50, 40, 30);
	 * const scalar = 30;
	 *
	 * const difference = vec1.subtract(scalar); // difference = {x: 20, y: 10, z: 0}
	 * @param vector {Vector3 | number} The vector or scalar to be subtracted from the callee.
	 */
	subtract(vector: Vector3 | number): Vector3;
	/**
	 * TODO: docs
	 */
	toAngles(): Array2d;

	/**
	 * [vector.toArray](https://wiki.rage.mp/index.php?title=Vector3::toArray)
	 * This function returns an array of the partials of a Vector3.
	 * @example
	 * const vec1 = new mp.Vector3(10, 30, 100);
	 *
	 * const array = vec1.toArray(); // [10, 30, 100]
	 * @returns An array of the partials of a Vector3
	 */
	toArray(): Array3d;

	/**
	 * This function returns a normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
	 * @example
	 * vector.unit();
	 * @returns Normalized copy of a Vector3 that has the same direction but with a magnitude of 1.
	 */
	unit(): Vector3;
}

declare class Entity {
	/**
	 * [entity.id](https://wiki.rage.mp/index.php?title=Entity::id):
	 * Property used for getting an entity ID.
	 * The ID is a unique identifier for the entity.
	 * A server-side ID is NOT the same as a client-side ID.
	 * Use [remoteId](https://wiki.rage.mp/index.php?title=Entity::remoteId)
	 * property if you want it to match the server-side ID.
	 * @example
	 * mp.events.add("playerJoin", (player) => {
	 *    console.log(`${player.name} has joined. [${player.id}]`);
	 * });
	 */
	public readonly id: number;
	/**
	 * [entity.type](https://wiki.rage.mp/index.php?title=Entity::type):
	 * Returns type of entity: player, ped, vehicle, object
	 * pickup, blip, checkpoint, marker, colshape, textlabel
	 * @example
	 * const entity = mp.players.at(0);
	 * console.log(entity.type) // returns 'player'
	 */
	public readonly type: CarefulRage.Entity.Type;
	/**
	 * [entity.alpha](https://wiki.rage.mp/index.php?title=Entity::alpha):
	 * This property using for setting or getting entity alpha.
	 * @example
	 * const alpha = player.alpha;
	 * console.log(alpha); // return e.g. 255
	 * player.alpha = 0; // make the player transparent
	 */
	public alpha: CarefulRage.Base.Alpha;
	/**
	 * [entity.data](https://wiki.rage.mp/index.php?title=Entity::data):
	 * This property is used to get or set entity data.
	 *
	 * If you use [setVariable](https://wiki.rage.mp/index.php?title=Entity::setVariable)
	 * you have to use [getVariable](https://wiki.rage.mp/index.php?title=Entity::getVariable)
	 * to get results. e.g. You can't do entity.setVariable('foo','bar') and get the result
	 * with entity.data.foo as getter. You can do so clientside, but not serverside.
	 * @example
	 * entity.data.foo = bar;
	 */
	public data: any;
	/**
	 * [entity.dimension](https://wiki.rage.mp/index.php?title=Entity::dimension):
	 * This property used for setting or getting an entity's dimension.
	 * The dimension determines who the entity is visible to.
	 * @example
	 * let dimension = player.dimension;
	 * player.dimension = 2; // set player dimension to 2
	 */
	public dimension: number;
	/**
	 * [entity.model](https://wiki.rage.mp/index.php?title=Entity::model):
	 * Property used to gets/sets the entity's model.
	 * @example Server-side
	 * const model = player.model;
	 * console.log(model); // return e.g. 867126926
	 * player.model = mp.joaat('player_zero');
	 * @example Client-side
	 * const model = player.model;
	 * alert(model); // return e.g. 867126926
	 * player.model = mp.game.joaat('player_zero');
	 */
	public model:
		CarefulRage.Player.Model |
		CarefulRage.Ped.Model |
		CarefulRage.Vehicle.Model |
		CarefulRage.Objects.Model |
		CarefulRage.Blip.Model |
		CarefulRage.Checkpoint.Model |
		CarefulRage.Marker.Model;
	/**
	 * [entity.position](https://wiki.rage.mp/index.php?title=Entity::position):
	 * Property used to gets/sets the entity's position.
	 * @example
	 * const playerPos = player.position
	 * console.log(playerPos) // return e.g. {x: 1337, y: 228, z: 70}
	 * player.position = new mp.Vector3(0.0, 0.0, 72.0);
	 */
	public position: Vector3;
	/**
	 * [entity.getVariable](https://wiki.rage.mp/index.php?title=Entity::getVariable):
	 * Retrieves the custom data from the entity.
	 * @example
	 * mp.events.addCommand('setNick', (player, nickname) => {
	 *   player.setVariable('oldNick', player.name);
	 *   player.name = nickname;
	 *   player.setVariable('newNick', nickname);
	 *   console.log(`Player[${player.id}] Changed nick from ${player.getVariable('oldNick')} to ${player.name}`);
	 * });
	 * @param name {string} The variabile name
	 */
	public getVariable<T = any>(name: string): T | null;
	/**
	 * [entity.getOwnVariable](https://wiki.rage.mp/index.php?title=Entity::getOwnVariable):
	 * Allows to get the value set with [entity.setOwnVariable(key, value)](https://wiki.rage.mp/index.php?title=Entity::setOwnVariable).
	 * @example
	 * player.setOwnVariable("jobId", 9);
	 * player.getOwnVariable("jobId"); // 9
	 * @param name {string} The variabile name
	 */
	public getOwnVariable<T = any>(name: string): T | null;
	/**
	 * [entity.setVariable](https://wiki.rage.mp/index.php?title=Entity::setVariable):
	 * Set custom data to an entity.
	 * @example
	 * let veh = mp.vehicles.new(vehName, player.position);
	 * player.setVariable('veh', veh);
	 * @param name {string} The variabile name
	 * @param value {any} The value
	 */
	public setVariable(name: string, value: any): void;
	/**
	 * [entity.setVariables](https://wiki.rage.mp/index.php?title=Entity::setVariables):
	 * Set multiple custom data variables to an entity.
	 * @example
	 * mp.events.addCommand('car', (player) => {
	 *     mp.vehicles.new(mp.joaat('turismor'), player.position);
	 * });
	 *
	 * mp.events.add("entityCreated", (entity) => {
	 *     if(entity.type === "vehicle"){
	 *         entity.setVariables({
	 *             "miles": 0,
	 *             "fuel": 100
	 *         });
	 *     }
	 * });
	 * @param values The values
	 */
	public setVariables(values: KeyValueCollection): void;

	/**
	 * Sets the data available to the player as opposed to [entity.setVariable(key, value)](https://wiki.rage.mp/index.php?title=Entity::setVariable).
	 */
	public setOwnVariable(key: string, value: any): void;

	/**
	 * Set multiple custom data variables that will be only available to an entity.
	 */
	public setOwnVariables(values: KeyValueCollection): void;

	/**
	 * Gets the distance between two entities.
	 *
	 * @param position Vector3
	 */
	public dist(position: Vector3): number;

	/**
	 * Gets the squared distance between two entities.
	 *
	 * @param position Vector3
	 */
	public distSquared(position: Vector3): number;

	/**
	 * Destroy a created entity.
	 */
	public destroy(): void;
}

declare class EntityPool<T> {
	/**
	 * Property used to get the element to count of a pool.
	 */
	public readonly length: number;

	/**
	 * Property used to get an element pool size.
	 *
	 * Useful to be used in explicit array size declaration or manual for loop size (non [foreach](https://wiki.rage.mp/index.php?title=Pool::forEach)).
	 */
	public readonly size: number;

	/**
	 * TODO: docs
	 */
	public apply(callingFunction: (...args: any[]) => void, ...args: any[]): void;

	/**
	 * Used to get an element from a pool at an ID.
	 *
	 * @param id Element ID, what you need get from the pool.
	 * @returns An element from a pool at an ID
	 */
	public at(id: number): T;

	/**
	 * Used for check, exists entity with ID in pool or not.
	 *
	 * @param entity Entity ID or the entity itself, what you want to check in pool.
	 */
	public exists(entity: T | number): boolean;

	/**
	 * Used for calling a function for each element in a pool.
	 *
	 * @param callingFunction Function what will be called
	 */
	public forEach(callingFunction: (entity: T) => void): void;

	/**
	 * Calling for each entity in a pool.
	 *
	 * Same as forEach except faster at lookups.
	 * Do not use this for destroying entities.
	 *
	 * @param callingFunction Function what will be called
	 */
	public forEachFast(callingFunction: (entity: T) => void): void;

	/**
	 * Used to call a function for each element in the pool.
	 *
	 * @param dimension Dimension
	 * @param callingFunction Function, what will be called.
	 */
	public forEachInDimension(dimension: number, callingFunction: (entity: T) => void): void;

	/**
	 * Used for calling a function for each element in a pool, but only if it in range of position.
	 *
	 * @param {Vector3} position - The position to check against.
	 * @param {number} range - The range within which elements will be processed.
	 * @param {function} callingFunction - The function to be called for each element.
	 */
	public forEachInRange(position: Vector3, range: number, callingFunction: (entity: T) => void): void;
	public forEachInRange(position: Vector3, range: number, dimension: number, callingFunction: (entity: T) => void): void;

	/**
	 * Gets the closest set of entities to a position.
	 *
	 * @param position Vector3
	 * @param limit Limit of results
	 * @returns Array of entities sorted by distance to given position
	 *
	 * @example
	 * ```
	 * const [closestVehicle] = mp.vehicles.getClosest(player.position, 1);
	 * closestVehicle.locked = true;
	 * ```
	 */
	public getClosest(position: Vector3, limit: number): T[];

	/**
	 * Gets the closest set of entities to a position in the defined dimension.
	 *
	 * @param position Vector3
	 * @param dimension The Dimension
	 * @param limit Limit of results
	 * @returns Array of entities sorted by distance to given position
	 *
	 * @example
	 * ```
	 * const [closestVehicle] = mp.vehicles.getClosestInDimension(player.position, player.dimension, 1);
	 * closestVehicle.locked = true;
	 * ```
	 */
	public getClosestInDimension(position: Vector3, dimension: number, limit: number): T[];

	/**
	 * Converts a pool to an array.
	 *
	 */
	public toArray(): T[];
}

declare class Player extends Entity {
	/**
	 * Property used for getting the player's action.
	 */
	public readonly action: string;

	/**
	 * Property used for getting the player's aim target
	 *
	 * If player currently [isn't aiming](https://wiki.rage.mp/index.php?title=Player::isAiming), this property will be last aim target.
	 */
	public readonly aimTarget: Player;

	/**
	 * Property used for getting the player's weapon hash and ammo.
	 */
	public readonly allWeapons: number[];

	/**
	 * Property used for getting the player's ip address.
	 */
	public readonly ip: string;

	/**
	 * Property used for getting the player's aiming state.
	 */
	public readonly isAiming: boolean;

	/**
	 * Property used for getting the player's climbing state.
	 */
	public readonly isClimbing: boolean;

	/**
	 * Property used for getting the player's entering vehicle state.
	 */
	public readonly isEnteringVehicle: boolean;

	/**
	 * Property used for getting the player's cover state.
	 */
	public readonly isInCover: boolean;

	/**
	 * Property used for getting the player's melee state.
	 */
	public readonly isInMelee: boolean;

	/**
	 * Property used for getting the player's jumping state.
	 */
	public readonly isJumping: boolean;

	/**
	 * Property used for getting the player's leaving vehicle state.
	 */
	public readonly isLeavingVehicle: boolean;

	/**
	 * Property used for getting the player's on ladder state.
	 */
	public readonly isOnLadder: boolean;

	/**
	 * Property used for getting the player's reloading state.
	 */
	public readonly isReloading: boolean;

	/**
	 * Property used for getting the player's primary hair color.
	 */
	public readonly hairColor: CarefulRage.Player.HairColorIndexes;

	/**
	 * Property used for getting the player's hair highlight color.
	 */
	public readonly hairHighlightColor: CarefulRage.Player.HairHighlightIndexes;

	/**
	 * Property used for getting the player's packet loss.
	 */
	public readonly packetLoss: number;

	/**
	 * Property used for getting the player's ping.
	 */
	public readonly ping: number;

	/**
	 * Property used for getting the player's social club id.
	 */
	public readonly rgscId: string;

	/**
	 * Property used for getting the player's vehicle seat.
	 */
	public readonly seat: CarefulRage.Vehicle.Seats;

	/**
	 * Property used for getting the player's client serial.
	 */
	public readonly serial: string;

	/**
	 * Property used for getting the player's social club.
	 */
	public readonly socialClub: string;

	/**
	 * Property used for getting the player's streamed players.
	 */
	public readonly streamedPlayers: Player[];

	/**
	 * Property used for getting the player's weapons.
	 */
	public readonly weapons: PlayerWeaponCollection;

	/**
	 * Property used for getting the player's vehicle.
	 */
	public readonly vehicle: Vehicle;

	/**
	 * Property used for getting the player's voice listeners.
	 *
	 * @returns {Player[]} All active voice listeners as an array,
	 * which got added by [Player::enableVoiceTo](https://wiki.rage.mp/index.php?title=Player::enableVoiceTo).
	 */
	public readonly voiceListeners: Player[];

	/**
	 * Property used to gets/sets the player's armor.
	 */
	public armour: number;

	/**
	 * Property used to gets/sets the player's eye color.
	 */
	public eyeColor: CarefulRage.Player.EyeColorIndexes;

	/**
	 * Property used to gets/sets the player's game type.
	 */
	public gameType: string;

	/**
	 * Property used to gets/sets the player's heading.
	 */
	public heading: number;

	/**
	 * Property used to gets/sets the player's health.
	 */
	public health: number;

	/**
	 * Property used to gets/sets the player's name.
	 * [player.name](https://wiki.rage.mp/index.php?title=Player::name)
	 * @example
	 * let playerName = player.name // gets player nickname
	 * player.name = 'Bobby'        // sets player nickname
	 */
	public name: string;

	/**
	 * This property returns players' current weapon.
	 * Note: this property is read-only.
	 * [player.weapon](https://wiki.rage.mp/index.php?title=Player::weapon)
	 * @example
	 * let playerWeapon = player.weapon // gets player weapon
	 */
	public readonly weapon: number;

	/**
	 * Gets ammo from the current player's weapon
	 * Note: this property is read-only.
	 * [player.weaponAmmo](https://wiki.rage.mp/index.php?title=Player::weaponAmmo)
	 * @example
	 * mp.events.addCommand('ammo', (player) => {
	 *   player.notify(`Ammo: ${player.weaponAmmo}`);
	 * });
	 */
	public readonly weaponAmmo: number;

	/**
	 * Property used to gets/sets the player's outgoing sync.
	 */
	public disableOutgoingSync: boolean;

	/**
	 * Bans the player from your server.
	 *
	 * The ban reason doesn't display for the player, you need to use something else to display it for the player.
	 *
	 * Also, all bans that use this function are cleared once the server restarts.
	 *
	 * You need to save the bans yourself if you want them to stay after restarting your server.
	 * @param reason The reason of ban
	 */
	public ban(reason: string): void;

	/**
	 * `FROM SERVER` Calls a client-side event for the selected player
	 *
	 * `FROM CLIENT` For Peer 2 Peer connections.
	 *
	 * The current client can call an event on another client's scriptside, and that other client can handle that event.
	 *
	 * @param eventName The event name that will be called
	 * @param args Any arguments, what should be sent to the client.
	 * Supports entities, strings, numbers and booleans.
	 * (Objects and Arrays should be packed to JSON format.) Arguments has to be packed in an array.
	 */
	public call(eventName: string, args?: any[]): void;

	/**
	 * Calls the specified player's clientside Remote procedure call (RPC) event and expects a callback.
	 *
	 * @param eventName
	 * @param args Args
	 */
	public callProc<T = any>(eventName: string, args?: any[]): Promise<T>;

	/**
	 * Triggers a client-side event for the selected player unreliably,
	 * which means it will be affected by potential packet loss,
	 * but it will be triggered way faster, useful for when you need frequent triggers.
	 *
	 * @param eventName Event Name
	 * @param args Args
	 */
	public callUnreliable(eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public cancelPendingProc(procName?: string): void;

	/**
	 * TODO: docs
	 */
	public clearDecorations(): void;

	/**
	 * Enables voice listening to a certain player.
	 *
	 * @param targetPlayer The Player you want to listen to.
	 */
	public enableVoiceTo(targetPlayer: Player): void;

	/**
	 * Disables voice listening to a certain player.
	 *
	 * @param targetPlayer The Player you want to stop listen to.
	 */
	public disableVoiceTo(targetPlayer: Player): void;

	/**
	 * TODO: docs
	 */
	public eval(code: string): void;

	/**
	 * Gets a hash of player clothes.
	 *
	 * @param {CarefulRage.ClothesComponent | number} component - [Components](https://wiki.rage.mp/index.php?title=Player::getClothes)
	 * @returns A hash of player clothes
	 */
	public getClothes(component:
						  CarefulRage.Player.ClothesComponentsIndexes |
						  CarefulRage.Player.ClothesComponent
	): {
		drawable: number;
		texture: number;
		palette: number;
	};

	/**
	 * Gets the tattoo (decoration) from a collection specified.
	 *
	 * @param collection - [Collections](https://github.com/root-cause/v-tattoos)
	 */
	public getDecoration(collection: number): number;

	/**
	 * Gets the various freemode face features, e.g., nose length, chin shape.
	 * Scale ranges from -1.0 to 1.0.
	 * Index can be 0 - 19.
	 *
	 * @param {number} index - [Index](https://wiki.rage.mp/index.php?title=Player::getFaceFeature)
	 */
	public getFaceFeature(index: number): number;

	/**
	 * TODO: docs
	 */
	public getHeadBlend(): {
		shapes: number[];
		skins: number[];
		shapeMix: number;
		skinMix: number;
		thirdMix: number;
	};

	/**
	 * TODO: docs
	 */
	public getHeadOverlay(overlay:
							  CarefulRage.Player.HeadOverlay |
							  CarefulRage.Player.HeadOverlayIndexes
	): Array4d;

	/**
	 * Gets a prop of player from ID.
	 *
	 * @param prop - [Props](https://wiki.rage.mp/index.php?title=Player::getProp)
	 * @returns A prop of player from ID
	 */
	public getProp(prop: CarefulRage.Player.Prop | CarefulRage.Player.PropIndexes): {
		drawable: number;
		texture: number;
	};

	/**
	 * Get the weapon's ammo.
	 *
	 * @param weapon Weapon Hash
	 */
	public getWeaponAmmo(weapon: CarefulRage.Weapons.Hash): number;

	/**
	 * Gives a weapon(see) for the player.
	 *
	 * @param weaponHash Weapon Hash
	 * @param ammo Ammo
	 */
	public giveWeapon(weaponHash: CarefulRage.Weapons.Hash, ammo: number): void;
	public giveWeapon(weaponHashes: Array<CarefulRage.Weapons.Hash>, ammo: number): void;

	/**
	 * TODO: docs
	 */
	public hasPendingProc(procName?: string): boolean;

	/**
	 * Used for check, player is located in stream distance for another player or not.
	 *
	 * @param player Player
	 */
	public isStreamed(player: Player): boolean;

	/**
	 * Invokes specified [native](https://cdn.rage.mp/public/natives/) function
	 *
	 * @param hash Hash
	 * @param args Args
	 */
	public invoke(hash: string, ...args: any[]): void;

	/**
	 * Kicks a player from the server.
	 *
	 * @param reason This message does not show up for the player being kicked
	 */
	public kick(reason: string): void;

	/**
	 * Silently kicks the player which will then reconnect them back to the server.
	 *
	 * Useful for quick reconnecting without going through the UI.
	 *
	 * The client will act as if it has timed out.
	 */
	public kickSilent(): void;

	/**
	 * Sends a notification to the player.
	 *
	 * You can use the color codes found here: [Fonts and colors](https://wiki.rage.mp/index.php?title=Fonts_and_Colors)
	 *
	 * @param message Message
	 */
	public notify(message: string): void;

	/**
	 * Writes a chat message to player.
	 *
	 * @param message Text what should be output in player chat.
	 */
	public outputChatBox(message: string): void;

	/**
	 * Starts animation
	 *
	 * @param dict - [Animation List](https://wiki.rage.mp/index.php?title=Animations)
	 * @param name Animation Name
	 * @param speed Animation Speed
	 * @param flag - [Animation Flags](https://wiki.rage.mp/index.php?title=Player::playAnimation)
	 */
	public playAnimation(dict: string, name: string, speed: number, flag: number): void;

	/**
	 * Stops animation of the player
	 */
	public stopAnimation(): void;

	/**
	 * Puts player into vehicle.
	 *
	 * You can't put player in vehicle immediately after creating vehicle, use timeout (200 ms will be fine)
	 *
	 * @param vehicle Vehicle
	 * @param seat Seat Number
	 */
	public putIntoVehicle(vehicle: Vehicle, seat: CarefulRage.Vehicle.Seats): void;

	/**
	 * Removes all weapons from the player
	 */
	public removeAllWeapons(): void;

	/**
	 * Ejects player from vehicle.
	 */
	public removeFromVehicle(): void;

	/**
	 * Removes a weapon of player. Weapon's hashes list
	 *
	 * @param weaponHash - [Weapon Hash](https://wiki.rage.mp/index.php?title=Weapons)
	 */
	public removeWeapon(weaponHash: CarefulRage.Weapons.Hash): void;

	/**
	 * Sets clothing for player.
	 *
	 * Alternative of client-side function: [Player::setComponentVariation](https://wiki.rage.mp/index.php?title=Player::setComponentVariation)
	 *
	 * @param component ClothesComponent
	 * @param drawable Number
	 * @param texture Texture
	 * @param palette Palette
	 */
	public setClothes(component:
						  CarefulRage.Player.ClothesComponentsIndexes |
						  CarefulRage.Player.ClothesComponent,
					  drawable: number,
					  texture: number,
					  palette: number
	): void;

	/**
	 * Sets player customization (NB: This resets your weapons also).
	 *
	 * IMPORTANT! faceFeatures array must contain 20 elements
	 */
	public setCustomization(
		gender: boolean,
		shapeFirst: number,
		shapeSecond: number,
		shapeThird: number,
		skinFirst: number,
		skinSecond: number,
		skinThird: number,
		shapeMix: number,
		skinMix: number,
		thirdMix: number,
		eyeColor: number,
		hairColor: number,
		hightlightColor: number,
		faceFeatures: number[]
	): void;

	/**
	 * Applies an Item from a PedDecorationCollection to a player. These include tattoos and shirt decals.
	 *
	 * @param collection Model hash or name
	 * @param overlay Model hash or name
	 */
	public setDecoration(collection: number, overlay: number): void;

	/**
	 * Sets the various freemode face features, e.g., nose length, chin shape.
	 * Scale ranges from -1.0 to 1.0.
	 * Index can be 0 - 19.
	 */
	public setFaceFeature(index: number, scale: number): void;

	/**
	 * Used for freemode (online) characters.
	 *
	 * @param firstColor First Color
	 * @param secondColor Second Color
	 */
	public setHairColor(firstColor: number, secondColor: number): void;

	/**
	 * TODO: docs
	 */
	public setHeadBlend(
		shapeFirst: number,
		shapeSecond: number,
		shapeThird: number,
		skinFirst: number,
		skinSecond: number,
		skinThird: number,
		shapeMix: number,
		skinMix: number,
		thirdMix: number
	): void;

	/**
	 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
	 *
	 * First and second color you can take in the list of hair colors.
	 *
	 * [List of colors](https://wiki.gtanet.work/index.php?title=Hair_Colors)
	 *
	 * To disable any overlay, use 255 as index.
	 */
	public setHeadOverlay(overlay:
							  CarefulRage.Player.HeadOverlay |
							  CarefulRage.Player.HeadOverlayIndexes,
						  value: Array4d
	): void;

	/**
	 * Sets the prop for the player
	 */
	public setProp(prop:
					   CarefulRage.Player.Prop |
					   CarefulRage.Player.PropIndexes,
				   drawable: number,
				   texture: number
	): void;

	/**
	 * Sets the amount of ammo for the selected weapon
	 *
	 * @param weapon Weapon Hash
	 * @param ammo Ammo
	 */
	public setWeaponAmmo(weapon: CarefulRage.Weapons.Hash, ammo: number): void;

	/**
	 * Spawns the player.
	 *
	 * @param position Vector3
	 */
	public spawn(position: Vector3): void;

	/**
	 * Updates the player head blend data
	 */
	public updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;

	/**
	 * Makes the player play a scenario.
	 *
	 * @param scenario - [Scenario List](https://wiki.rage.mp/index.php?title=Scenarios)
	 */
	public playScenario(scenario: string): void;

	/**
	 * Calls all streamed in players' clientside from the specified player passing data.
	 *
	 * @param includeSelf Calls the specified player's clientside also along with the streamed players to him
	 * @param eventName Event Name
	 * @param args Args
	 */
	public callToStreamed(includeSelf: boolean, eventName: string, args?: any[]): void;
}

declare class PlayerPool extends EntityPool<Player> {
	/**
	 * Writes a chat message for all players (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
	 *
	 * @param text The text to be sent
	 */
	public broadcast(text: string): void;

	/**
	 * Writes a chat message for all players in range (like [Player::outputChatBox](https://wiki.rage.mp/index.php?title=Player::outputChatBox)).
	 *
	 * @param position The position from which the broadcast will be sent
	 * @param range The range from position
	 * @param dimension The dimension in which the broadcast will be sent (optional)
	 * @param text The text to be sent
	 */
	public broadcastInRange(position: Vector3, range: number, text: string): void;
	public broadcastInRange(position: Vector3, range: number, dimension: number, text: string): void;

	/**
	 * Triggers an event for:
	 *
	 * - the whole server
	 * - specified players array
	 *
	 * @param eventName Event name, what will be called
	 * @param args Any arguments, what should be sent to the client.
	 * Supports entities, strings, numbers and booleans.
	 * (Objects and Arrays should be packed to JSON format.)
	 */
	public call(eventName: string, args?: any[]): void;
	public call(players: Player[], eventName: string, args?: any[]): void;

	/**
	 * Calls added client-side event for any players in a specific dimension
	 *
	 * @param dimension The dimension in which the event will be sent
	 * @param eventName Event name, what will be called
	 * @param args Any arguments, what should be sent to the client.
	 * Supports entities, strings, numbers and booleans.
	 * (Objects and Arrays should be packed to JSON format.)
	 */
	public callInDimension(dimension: number, eventName: string, args?: any[]): void;

	/**
	 * Calls a function for each player in range of position.
	 *
	 * @param position The position from which the broadcast will be sent
	 * @param range The range from position
	 * @param eventName Event name, what will be called
	 * @param args Any arguments, what should be sent to the client.
	 * Supports entities, strings, numbers and booleans.
	 * (Objects and Arrays should be packed to JSON format.)
	 */
	public callInRange(position: Vector3, range: number, eventName: string, args?: any[]): void;
	public callInRange(position: Vector3, range: number, dimension: number, eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public callUnreliable(eventName: string, args?: any[]): void;
	public callUnreliable(players: Player[], eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public callInDimensionUnreliable(dimension: number, eventName: string, args?: any[]): void;

	/**
	 * TODO: docs
	 */
	public callInRangeUnreliable(position: Vector3, range: number, eventName: string, args?: any[]): void;
	public callInRangeUnreliable(position: Vector3, range: number, dimension: number, eventName: string, args?: any[]): void;
}

declare type Quaternion = {
	x: number;
	y: number;
	z: number;
	w: number;
};

declare class Vehicle extends Entity {
	/**
	 * Property used for getting the vehicle's extras
	 */
	public readonly extras: boolean[];

	/**
	 * Property used for getting the vehicle's mods
	 */
	public readonly mods: number[];

	/**
	 * Property used for getting the engine's health.
	 *
	 * For edit health use [Vehicle::repair](https://wiki.rage.mp/index.php?title=Vehicle::repair)
	 */
	public readonly engineHealth: number;

	/**
	 * Property used for getting the brake's state.
	 */
	public readonly brake: boolean;

	/**
	 * Property used for getting the highbeams's state.
	 */
	public readonly highbeams: boolean;

	/**
	 * Property used for getting the horn's state.
	 */
	public readonly horn: boolean;

	/**
	 * Property used for getting the rocket boost's state.
	 */
	public readonly rocketBoost: boolean;

	/**
	 * Property used for getting the siren's state.
	 */
	public readonly siren: boolean;

	/**
	 * Property used for getting the steer angle's state.
	 *
	 * From -1 to 1
	 */
	public readonly steerAngle: number;
	/**
	 * Property used for getting the vehicle velocity.
	 */
	public readonly velocity: Vector3;

	/**
	 * Property used for getting the vehicle's streamed players
	 */
	public readonly streamedPlayers: Player[];

	/**
	 * Property used for getting the vehicle's heading.
	 */
	public readonly heading: number;

	/**
	 * Property used for getting the vehicle's quaternion.
	 */
	public readonly quaternion: Quaternion;

	/**
	 * Property used for getting the vehicle's trailer
	 */
	public readonly trailer: Vehicle;

	/**
	 * Property used for getting the vehicle's trailered by
	 */
	public readonly traileredBy: Vehicle;

	/**
	 * Property used to gets/sets the vehicle's rotation.
	 */
	public rotation: Vector3;

	/**
	 * Property used to gets/sets the body's health.
	 */
	public bodyHealth: number;

	/**
	 * Property used to gets/sets the vehicle's controller.
	 */
	public controller: Player | undefined;

	/**
	 * Property used to gets/sets the vehicle's custom tires.
	 */
	public customTires: boolean;

	/**
	 * Property used for getting the vehicle's engine status.
	 */
	public engine: boolean;

	/**
	 * Property used to gets/sets the vehicle's dashboard color.
	 */
	public dashboardColor: number;

	/**
	 * Property used to gets/sets the vehicle's dead state.
	 */
	public dead: boolean;

	/**
	 * Property used to gets/sets the vehicle's livery
	 */
	public livery: number;

	/**
	 * Property used to gets/sets the vehicle's lock state
	 */
	public locked: boolean;

	/**
	 * Property used to gets/sets the vehicle's movable state.
	 */
	public movable: boolean;

	/**
	 * Property used for getting the vehicle's neon status.
	 */
	public neonEnabled: boolean;

	/**
	 * Property used to gets/sets the vehicle's number plate
	 *
	 * Maximum length: 8 char
	 */
	public numberPlate: string;

	/**
	 * Property used to gets/sets the vehicle's number plate type
	 */
	public numberPlateType: CarefulRage.Vehicle.NumberPlates;

	/**
	 * Property used to gets/sets the vehicle's pearlescent color
	 *
	 * Using the [Vehicle colors](https://wiki.rage.mp/index.php?title=Vehicle_Colors).
	 */
	public pearlescentColor: number;

	/**
	 * Property used to gets/sets the vehicle's taxi lights state.
	 */
	public taxiLights: boolean;

	/**
	 * Property used to gets/sets the vehicle's trim color.
	 */
	public trimColor: number;

	/**
	 * Property used to gets/sets the vehicle's wheels [color](https://wiki.rage.mp/index.php?title=Vehicle_Colors).
	 */
	public wheelColor: number;

	/**
	 * Property used to gets/sets the vehicle's wheel type.
	 */
	public wheelType: number;

	/**
	 * Property used to gets/sets the vehicle's window tint.
	 *
	 * 1 - 255
	 */
	public windowTint: number;

	/**
	 * Explodes the target vehicle.
	 */
	public explode(): void;

	/**
	 * On the client-side, this function requires three args (red: int, green: int, blue: int), and will return an object: RGB
	 *
	 * @param id 0 - Primary Color | 1 - Secondary Color
	 */
	public getColor(id: CarefulRage.Vehicle.PrimaryColor | CarefulRage.Vehicle.SecondaryColor): CarefulRage.Vehicle.Color;

	/**
	 * Used to get the vehicle RGB body color. Returns null if never set explicitly.
	 *
	 * @param id 0 - Primary Color | 1 - Secondary Color
	 * @returns RGB
	 */
	public getColorRGB(id: CarefulRage.Vehicle.PrimaryColor | CarefulRage.Vehicle.SecondaryColor): CarefulRage.Base.RGB;

	/**
	 * Get the extra currently applied on vehicle in the target extra id.
	 *
	 * @param index - Extra Id
	 */
	public getExtra(index: number): boolean;

	/**
	 * Gets the mod currently applied on your vehicle in the targetted modType.
	 *
	 * @param modType Mod Type
	 */
	public getMod(modType: number): number;

	/**
	 * Used to get the current neon lights of a vehicle.
	 */
	public getNeonColor(): number[];

	/**
	 * Get the occupant inside a vehicle by seat number
	 *
	 * @param seat Vehicle Seat
	 */
	public getOccupant(seat: number): Player;

	/**
	 * Gets the occupants inside a vehicle.
	 */
	public getOccupants(): Player[];

	/**
	 * Get vehicle paint by id
	 *
	 * @param id 0 - Primary Color | 1 - Secondary Color
	 */
	public getPaint(id: CarefulRage.Vehicle.PrimaryColor | CarefulRage.Vehicle.SecondaryColor): CarefulRage.Vehicle.Color;

	/**
	 * Used for check, the vehicle is located in stream distance for player or not.
	 *
	 * @param player Player object
	 */
	public isStreamed(player: Player): boolean;

	/**
	 * Repairs a vehicle.
	 */
	public repair(): void;

	/**
	 * Sets vehicle body color. ([Vehicle colors](https://wiki.rage.mp/index.php?title=Vehicle_Colors))
	 *
	 * @param primary Primary Color
	 * @param secondary Secondary Color
	 */
	public setColor(
		primary: CarefulRage.Vehicle.Color,
		secondary: CarefulRage.Vehicle.Color
	): void;

	/**
	 * Sets vehicle RGB body color.
	 *
	 * @param red1 Primary Red Color [0 - 255]
	 * @param green1 Primary Green Color [0 - 255]
	 * @param blue1 Primary Blue Color [0 - 255]
	 * @param red2 Secondary Red Color [0 - 255]
	 * @param green2 Secondary Green Color [0 - 255]
	 * @param blue2 Secondary Blue Color [0 - 255]
	 */
	public setColorRGB(
		red1: CarefulRage.Base.Red,
		green1: CarefulRage.Base.Green,
		blue1: CarefulRage.Base.Blue,
		red2: CarefulRage.Base.Red,
		green2: CarefulRage.Base.Green,
		blue2: CarefulRage.Base.Blue): void;

	/**
	 * Max extra ID is 16.
	 */
	public setExtra(index: number, value: boolean): void;

	/**
	 * Applies the specified mod onto the vehicle.
	 *
	 * @param modType Mod Type
	 * @param modIndex Mod Index
	 */
	public setMod(modType: CarefulRage.Vehicle.ModType, modIndex: number): void;

	/**
	 * Sets vehicle neon lights.
	 *
	 * @param red Red Value 0 - 255.
	 * @param green Green Value 0 - 255.
	 * @param blue Blue Value 0 - 255.
	 */
	public setNeonColor(red: number, green: number, blue: number): void;

	/**
	 * TODO: docs
	 */
	public setPaint(primaryType: number, primaryColor: number, secondaryType: number, secondaryColor: number): void;

	/**
	 * TODO: docs
	 */
	public setOccupant(seat: number, player: Player): void;

	/**
	 * Spawns vehicle.
	 *
	 * @param position Vector3
	 * @param heading Heading
	 */
	public spawn(position: Vector3, heading: number): void;
}

declare interface VehiclePool extends EntityPool<Vehicle> {
	'new'(
		model: CarefulRage.Vehicle.Model,
		position: Vector3,
		options?: {
			alpha?: CarefulRage.Base.Alpha;
			color?: [Array2d, Array2d] | [CarefulRage.Base.RGB, CarefulRage.Base.RGB];
			dimension?: number;
			engine?: boolean;
			heading?: number;
			locked?: boolean;
			numberPlate?: string;
		}
	): Vehicle;
}

declare interface EventMpThis {
	cancel: boolean;
}

declare interface IServerEvents {
	entityCreated: (entity: Entity) => void;
	/*
	   * @deprecated Broken/Removed in RageMP 1.1 DP1
	 */
	entityDestroyed: (entity: Entity) => void;
	entityModelChange: (entity: Entity, oldModel: number) => void;
	incomingConnection: (ip: string, serial: string, rgscName: string, rgscId: string, gameType: string) => void;
	packagesLoaded: () => void;
	playerChat: (player: Player, text: string) => void;
	playerCommand: (player: Player, command: string) => void;
	playerDamage: (player: Player, healthLoss: number, armorLoss: number) => void;
	playerDeath: (player: Player, reason: number, killer?: Player) => void;
	playerEnterCheckpoint: (player: Player, checkpoint: Checkpoint) => void;
	playerEnterColshape: (player: Player, colshape: ColshapeMp) => void;
	playerEnterVehicle: (player: Player, vehicle: Vehicle, seat: CarefulRage.Vehicle.Seats) => void;
	playerExitCheckpoint: (player: Player, checkpoint: Checkpoint) => void;
	playerExitColshape: (player: Player, colshape: ColshapeMp) => void;
	playerExitVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
	playerJoin: (player: Player) => void;
	playerQuit: (player: Player, exitType: string, reason: string) => void;
	playerReachWaypoint: (player: Player) => void;
	playerReady: (player: Player) => void;
	playerSpawn: (player: Player) => void;
	playerStartEnterVehicle: (player: Player, vehicle: Vehicle, seat: CarefulRage.Vehicle.Seats) => void;
	playerStartExitVehicle: (player: Player) => void;
	playerStreamIn: (player: Player, forPlayer: Player) => void;
	playerStreamOut: (player: Player, forPlayer: Player) => void;
	playerWeaponChange: (player: Player, oldWeapon: number, newWeapon: number) => void;
	serverShutdown: () => void;
	trailerAttached: (vehicle: Vehicle, trailer: Vehicle) => void;
	vehicleDamage: (vehicle: Vehicle, bodyHealthLoss: number, engineHealthLoss: number) => void;
	vehicleDeath: (vehicle: Vehicle) => void;
	vehicleHornToggle: (vehicle: Vehicle, toggle: boolean) => void;
	vehicleSirenToggle: (vehicle: Vehicle, toggle: boolean) => void;
}

declare class EventMp {
	// @ts-ignore
	constructor<K extends keyof IServerEvents>(eventName: K, callback: IServerEvents[K]);
	constructor(eventName: string, callback: (...args: any[]) => void);

	/**
	 * Destroys the event
	 */
	public destroy(): void;
}

declare type MultiEventHandlers = Partial<IServerEvents> & Record<string, (...args: any) => void>;

declare type ThisifyServerEvents = {
	[P in keyof IServerEvents]: (this: EventMpThis, ...args: Parameters<IServerEvents[P]>) => void;
}

declare class EventMpPool {
	/**
	 * Delays server's shutdown till you finish all your async tasks.
	 *
	 * HINT: use [delayTermination](https://wiki.rage.mp/index.php?title=Events::delayTermination) instead.
	 */
	public delayShutdown: boolean;

	/**
	 * Same as [delayShutdown](https://wiki.rage.mp/index.php?title=Events::delayTermination), but it seems to work over [delayShutdown](https://wiki.rage.mp/index.php?title=Events::delayTermination).
	 */
	public delayTermination: boolean;

	/**
	 * Delays server's initialization of packages to run early functions.
	 */
	public delayInitialization: boolean;

	/**
	 * Registers event handlers.
	 *
	 * Returning true will automatically destroy the event handler.
	 *
	 * @param eventName The name of the event you wish to attach a handler to
	 * @param callback The function that you want the event to trigger, which has to be defined before you add the handler
	 */
	public add<K extends keyof IServerEvents>(eventName: K, callback: ThisifyServerEvents[K]): void;
	public add(eventHandlers: MultiEventHandlers): void;
	public add(eventName: string, callback: (this: EventMpThis, ...args: any[]) => void): void;

	/**
	 * Registers a command handler.
	 *
	 * @param commandName The name of the command you wish to attach a handler to
	 * @param callback The function that you want the command to trigger, which has to be defined before you add the handler
	 */
	public addCommand(commandName: string, callback: (player: Player, fullText: string, ...args: string[]) => void): void;
	public addCommand(commands: { [commandName: string]: (player: Player, fullText: string, ...args: string[]) => void }): void;

	/**
	 * Register the specified player's Remote Procedure Call (RPC) event and expects a callback.
	 *
	 * @param procedureName The name of the procedure you wish to attach a handler to
	 * @param callback The function that you want the RPC to trigger, which has to be defined before you add the handler
	 */
	public addProc(procedureName: string, callback: (...args: any[]) => void): void;
	public addProc(procedures: { [name: string]: (...args: any[]) => void }): void;

	/**
	 * Calls registered event handlers. This function can call serverside events from serverside and clientside events from clientside.
	 *
	 * 1.1 - If you're sending number more than 2^31 to the client, you need to arg.toString() transform your number on server and parseInt(arg) on the client.
	 *
	 * @param eventName The name of the event you wish to call
	 * @param args The arguments
	 */
	public call<K extends keyof IServerEvents>(eventName: K, ...args: any[]): void;
	public call(eventName: string, ...args: any[]): void;

	/**
	 * Gets all handlers of the specified event.
	 *
	 * @param eventName Name of the event you want to get all handlers
	 * @returns An array of specified event
	 */
	public getAllOf<K extends keyof IServerEvents>(eventName: K): Function[];
	public getAllOf(eventName: string): Function[];

	/**
	 * Removes the specified event from events tree.
	 *
	 * @param eventName Name of the event you want to remove
	 * @param callback The function that you want the event to remove
	 */
	public remove<K extends keyof IServerEvents>(eventName: K, callback?: IServerEvents[K]): void;
	public remove(eventName: string, callback?: (...args: any[]) => void): void;
	public remove(eventNames: string[]): void;

	/**
	 * Returns a list of binded events.
	 */
	readonly binded: { [key: string]: Function }[]

	/**
	 * Resets the whole event manager.
	 */
	public reset(): void;
}

declare class Blip extends Entity {
	/**
	 * [blip.color](https://wiki.rage.mp/index.php?title=Blip::color):
	 * Property related to the Blip's color.
	 * @example
	 * let createdBlip = mp.blips.new(140, new mp.Vector3(0, 0, 0));
	 * createdBlip.color = 1;
	 */
	color: CarefulRage.Blip.Color;

	/**
	 * [blip.name](https://wiki.rage.mp/index.php?title=Blip::name):
	 * This property is used to change the name of the blip shown on the map. When you press Esc and hover over the blip, it will have this name.
	 * @example
	 * let createdBlip = mp.blips.new(140, new mp.Vector3(0, 0, 0));
	 *
	 * createdBlip.name = '24/7 Shop';
	 */
	name: string;

	/**
	 * [blip.drawDistance](https://wiki.rage.mp/index.php?title=Blip::drawDistance):
	 * Property used to have a fade in/out of the blip when you're in range of the draw distance.
	 * @example
	 * blip.drawDistance = 45.5; // The blip will be shown to each player near at 45.5 meters.
	 */
	drawDistance: number;

	/**
	 * [blip.rotation](https://wiki.rage.mp/index.php?title=Blip::rotation):
	 * This function is used to change the blip rotation.
	 * @example
	 * let createdBlip = mp.blips.new(1, new mp.Vector3(0, 0, 0));
	 *
	 * createdBlip.rotation = 180;
	 */
	rotation: number;

	/**
	 * [blip.scale](https://wiki.rage.mp/index.php?title=Blip::scale):
	 * This property is used to change the blip scale.
	 * @example
	 * let createdBlip = mp.blips.new(1, new mp.Vector3(0, 0, 0));
	 *
	 * createdBlip.scale = 2;
	 */
	scale: number;

	/**
	 * [blip.shortRange](https://wiki.rage.mp/index.php?title=Blip::shortRange):
	 * Changes the behavior of the Blip on the minimap.
	 * @example
	 * blip.shortRange = true; // Auto-hide the blip if it's not longer in range of the minimap
	 * blip.shortRange = false; // Always show the blip
	 */
	shortRange: boolean;

	/**
	 * [blip.sprite](https://wiki.rage.mp/index.php?title=Blip::sprite):
	 * This property is used to change the blip sprite.
	 * @example
	 * let createdBlip = mp.blips.new(1, new mp.Vector3(0, 0, 0));
	 *
	 * createdBlip.sprite = 40;
	 */
	sprite: CarefulRage.Blip.Model;

	/**
	 * [blip.routeFor](https://wiki.rage.mp/index.php?title=Blip::routeFor):
	 * Creates a route to the blip from the player's location.
	 * @example
	 * mp.events.addCommand("routeBlip", (player) => {
	 *    const position = player.position;
	 *    const blip = mp.blips.new(1, position);
	 *
	 *    blip.routeFor(player, 2, 1);
	 * });
	 * @param player {Player} Player object or an array of player objects
	 * @param color {CarefulRage.Blip.Color}All colors available on [Blip Colors](https://wiki.rage.mp/index.php?title=Blips#Blip_colors) page
	 * @param scale {number} Float
	 */
	routeFor(player: Player | Player[] | undefined, color: CarefulRage.Blip.Color, scale: number): void;

	/**
	 * [blip.unrouteFor](https://wiki.rage.mp/index.php?title=Blip::unrouteFor):
	 * This function used for remove route to blip for player.
	 * @example
	 * mp.events.addCommand("unrouteFirstBlip", (player) => {
	 *   const blip = mp.blips.at(0);
	 *   if (blip) {
	 *     blip.unrouteFor(player);
	 *   }
	 * });
	 * @param player Array or object of player to which to remove route
	 */
	unrouteFor(player: Player | Player[]): void;
}

declare interface BlipPool extends EntityPool<Blip> {
	'new'(
		sprite: CarefulRage.Blip.Model,
		position: Vector3,
		options?: {
			alpha?: CarefulRage.Base.Alpha;
			color?: CarefulRage.Blip.Color;
			dimension?: number;
			drawDistance?: number;
			name?: string;
			rotation?: number;
			scale?: number;
			shortRange?: boolean;
		}
	): Blip;
}

declare class Checkpoint extends Entity {
	/**
	 *
	 * Property related to the Checkpoint's color.
	 * TODO: Test this property
	 */
	color: number;
	/**
	 * [checkpoint.destination](https://wiki.rage.mp/index.php?title=Checkpoint::destination):
	 * This property is used to set or retrieve the direction of the checkpoint.
	 * @example
	 * const destination = checkpoint.destination; // get checkpoint destination
	 * console.log(destination);
	 *
	 * checkpoint.destination = new mp.Vector3(10, 10, 10); // set checkpoint destination
	 */
	destination: Vector3;
	/**
	 * [checkpoint.radius](https://wiki.rage.mp/index.php?title=Checkpoint::radius):
	 * This property is used to set or get the radius of the checkpoint.
	 * @example
	 * const radius = checkpoint.radius; // get checkpoint radius
	 * console.log(radius);
	 *
	 * checkpoint.radius = 5; // set checkpoint radius
	 */
	radius: number;
	/**
	 * [checkpoint.visible](https://wiki.rage.mp/index.php?title=Checkpoint::visible):
	 * This property is used to set or get the visible of the checkpoint.
	 * @example
	 * const visible = checkpoint.visible; // get checkpoint visible
	 * console.log(visible);
	 *
	 * checkpoint.visible = true; // set checkpoint visible
	 */
	visible: boolean;
	/**
	 * [checkpoint.getColor](https://wiki.rage.mp/index.php?title=Checkpoint::getColor)
	 * Function: Returns an array of 4 numbers, with a checkpoint color
	 * @example
	 * const checkpoint = mp.checkpoints.new(2, new mp.Vector3(10, 10, 72), new mp.Vector3(), 4, 150, 255, 255, 255, true);
	 * const color = checkpoint.getColor();
	 *
	 * console.log(color); // -> [150, 255, 255, 255]
	 * console.log(color[0]); // -> 150
	 */
	getColor(): CarefulRage.Base.RGBA;
	/**
	 * [checkpoint.hideFor](https://wiki.rage.mp/index.php?title=Checkpoint::hideFor)
	 * Hiding a checkpoint for a particular player.
	 * @example
	 * const checkpoint = mp.checkpoints.new(2, new mp.Vector3(10, 10, 72), new mp.Vector3(), 4, 255, 255, 255, 255, true);
	 * const player = mp.players.at(0);
	 * checkpoint.hideFor(player);
	 */
	hideFor(player: Player): void;
	/**
	 * [checkpoint.setColor](https://wiki.rage.mp/index.php?title=Checkpoint::setColor)
	 * Sets the checkpoint color.
	 * @example
	 * checkpoint.setColour(r, g, b, a);
	 * @example
	 * const checkpoint = mp.checkpoints.new(2, new mp.Vector3(10, 10, 72), new mp.Vector3(), 4, 150, 255, 255, 255, true);
	 *
	 * checkpoint.setColour(255, 0, 0, 255);
	 *
	 * @param red Red color value (0 to 255)
	 * @param green Green color value (0 to 255)
	 * @param blue Blue color value (0 to 255)
	 * @param alpha Alpha color value (0 to 255)
	 */
	setColor(
		red: CarefulRage.Base.Red,
		green: CarefulRage.Base.Blue,
		blue: CarefulRage.Base.Blue,
		alpha: CarefulRage.Base.Alpha
	): void;
	/**
	 * [checkpoint.showFor](https://wiki.rage.mp/index.php?title=Checkpoint::showFor)
	 * Showing a checkpoint for a particular player.
	 * @example
	 * const checkpoint = mp.checkpoints.new(2, new mp.Vector3(10, 10, 72), 5, new mp.Vector3(), 4, 255, 255, 255, 255, false);
	 * const player = mp.players.at(0);
	 * checkpoint.showFor(player);
	 */
	showFor(player: Player): void;
}

declare interface CheckpointPool extends EntityPool<Checkpoint> {
	'new'(
		type: CarefulRage.Checkpoint.Model,
		position: Vector3,
		radius: number,
		options?: {
			color?: CarefulRage.Base.RGBA;
			dimension?: number;
			direction?: Vector3;
			visible?: boolean;
		}
	): Checkpoint;
}

declare class ColshapeMp extends Entity {
	/**
	 * Returns type of colshape.
	 */
	readonly shapeType: CarefulRage.Colshape.Model;

	/**
	 * Checking if a point is within the colshape.
	 *
	 * @param point Vector3
	 */
	isPointWithin(point: Vector3): boolean;
}

declare class ColshapeMpPool extends EntityPool<ColshapeMp> {
	/**
	 * Create a ColShape of circle in the 2D plane
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param range Number in float
	 * @param dimension  Number (optional parameter)
	 */
	newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a cuboid ColShape in 3D space
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param z Number in float
	 * @param width Number in float
	 * @param depth Number in float
	 * @param height Number in float
	 * @param dimension Number (optional)
	 */
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a rectangle (square) ColShape 2D plane
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param width Number in float
	 * @param height Number in float
	 * @param dimension Number (optional)
	 */
	newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a Sphere ColShape
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param z Number in float
	 * @param range Number in float
	 * @param dimension Number (optional parameter)
	 */
	newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;

	/**
	 * Creates a Colshape into the shape of a Tube.
	 *
	 * @param x Number in float
	 * @param y Number in float
	 * @param z Number in float
	 * @param height Number in float
	 * @param range Number in float
	 * @param dimension Number in float
	 */
	newTube(x: number, y: number, z: number, height: number, range: number, dimension?: number): ColshapeMp;
}

declare class Marker extends Entity {
	/**
	 * TODO: docs
	 */
	direction: Vector3;

	/**
	 * Sets the scale of the selected marker
	 */
	scale: number;

	/**
	 * TODO: docs
	 */
	visible: boolean;

	/**
	 * Gets the marker's color.
	 */
	getColor(): CarefulRage.Base.RGBA;

	/**
	 * Hiding a marker for a particular player.
	 */
	hideFor(player: Player): void;

	/**
	 * Sets the marker color.
	 *
	 * @param red Red color value (0 to 255)
	 * @param green Green color value (0 to 255)
	 * @param blue Blue color value (0 to 255)
	 * @param alpha Alpha color value (0 to 255)
	 */
	setColor(
		red: CarefulRage.Base.Red,
		green: CarefulRage.Base.Green,
		blue: CarefulRage.Base.Blue,
		alpha: CarefulRage.Base.Alpha
	): void;

	/**
	 * Showing a marker for a particular player.
	 */
	showFor(player: Player): void;
}

declare interface MarkerPool extends EntityPool<Marker> {
	'new'(
		type: CarefulRage.Marker.Model,
		position: Vector3,
		scale: number,
		options?: {
			color?: CarefulRage.Base.RGBA;
			dimension?: number;
			direction?: Vector3;
			rotation?: Vector3;
			visible?: boolean;
		}
	): Marker;
}

declare class TextLabel extends Entity {
	/**
	 * Update the color of the selected label
	 */
	color: CarefulRage.Base.RGB;


	/**
	 * Update the draw distance of the selected label
	 */
	drawDistance: number;

	/**
	 * Updates the los(Line of Sight) on the selected label.
	 */
	los: boolean;

	/**
	 * Updates the text of a created label.
	 */
	text: string;
}

declare interface TextLabelPool extends EntityPool<TextLabel> {
	'new'(
		text: string,
		position: Vector3,
		options?: {
			color?: CarefulRage.Base.RGBA;
			dimension?: number;
			drawDistance?: number;
			font?: number;
			los?: boolean;
		}
	): TextLabel;
}

declare class Ped extends Entity {
	controller: Player;

	/**
   * Property used to gets/sets the ped's heading.
   */
	public heading: number;
}

declare interface PedPool extends EntityPool<Ped> {
	'new'(
		modelHash: CarefulRage.Ped.Model,
		position: Vector3,
		options?: {
			dynamic?: boolean;
			frozen?: boolean;
			invincible?: boolean;
			lockController?: boolean;
			heading?: number;
			dimension?: number;
		}
	): Ped;
}

declare class ObjectMp extends Entity {
	rotation: Vector3;
}

declare interface ObjectMpPool extends EntityPool<ObjectMp> {
	/**
	 * @see https://cdn.rage.mp/public/odb/index.html
	 */
	'new'(
		model: CarefulRage.Objects.Model,
		position: Vector3,
		options?: {
			alpha?: CarefulRage.Base.Alpha;
			dimension?: number;
			rotation?: Vector3;
		}
	): ObjectMp;
}

declare interface World {
	/**
	 * This property gets/sets game weather.
	 *
	 * [Weather](https://wiki.rage.mp/index.php?title=Weather)
	 */
	weather: CarefulRage.Weather.Model;

	/**
	 * This function sets time.
	 */
	time: {
		hour: number;
		minute: number;
		second: number;

		set(hour: number, minute: number, second: number): void;
	};

	trafficLights: {
		/**
		 * This property locks the traffic lights in their current position.
		 */
		locked: boolean;

		/**
		 * This property set the traffic lights state.
		 * (If you want to make your own traffic lights system,
		 * make sure of locking the traffic lights to avoid the game to change them by itself.)
		 */
		state: number;
	};

	/**
	 * Removes an IPL and sync it to every client
	 *
	 * @param ipl - [IPLs](https://wiki.rage.mp/index.php?title=Interiors_and_Locations)
	 */
	removeIpl(ipl: string): void;

	/**
	 * Requests an IPL and sync it to every client.
	 *
	 * @param name ipl [IPLs](https://wiki.rage.mp/index.php?title=Interiors_and_Locations)
	 */
	requestIpl(name: string): void;

	/**
	 * Starts a weather transition to the weather specified and sync it to all clients.
	 *
	 * @param weather - [Weather](https://wiki.rage.mp/index.php?title=Weather)
	 * @param duration Weather transitioning time
	 */
	setWeatherTransition(weather: CarefulRage.Weather.Model, duration?: number): void;
}

declare interface Dummy {
	dummyType: number;
}

declare interface DummyPool {
	'new'(dummyEntityType: number, sharedVariables: KeyValueCollection): Dummy;

	forEachByType(dummyEntityType: number, fn: (entity: Dummy) => void): void;
}

declare interface Config {
	announce: boolean;
	bind: string;
	gamemode: string;
	encryption: boolean;
	maxplayers: number;
	name: string;
	'stream-distance': number;
	port: number;
	'disallow-multiple-connections-per-ip': boolean;
	'limit-time-of-connections-per-ip': number;
	url: string;
	language: string;
	'sync-rate': number;
	'resource-scan-thread-limit': number;
	'max-ping': number;
	'min-fps': number;
	'max-packet-loss': number;
	'allow-cef-debugging': boolean;
	'enable-nodejs': boolean;
	csharp: boolean;
	'enable-http-security': boolean;
	'voice-chat': boolean;
	'allow-voice-chat-input': number;
	'voice-chat-sample-rate': number;
	'fastdl-host': string;
	'create-fastdl-snapshot': boolean;
}

declare interface Network {
	startBatch(): void;
	endBatch(): void;
}

declare interface Mp {
	Player: typeof Player;
	players: PlayerPool;

	Vehicle: typeof Vehicle;
	vehicles: VehiclePool;

	Event: typeof EventMp;
	events: EventMpPool;

	Blip: typeof Blip;
	blips: BlipPool;

	Checkpoint: typeof Checkpoint;
	checkpoints: CheckpointPool;

	Colshape: typeof ColshapeMp;
	colshapes: ColshapeMpPool;

	Marker: typeof Marker;
	markers: MarkerPool;

	TextLabel: typeof TextLabel;
	labels: TextLabelPool;

	Ped: typeof Ped;
	peds: PedPool;

	Object: typeof ObjectMp;
	objects: ObjectMpPool;

	dummies: DummyPool;
	world: World;
	config: Config;
	network: Network;

	Vector3: typeof Vector3;

	joaat(str: string): number;
	joaat(strs: string[]): number[];
}

declare const mp: Mp;
