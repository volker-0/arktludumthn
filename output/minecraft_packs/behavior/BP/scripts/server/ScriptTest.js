const systemServer = server.registerSystem(0, 0)


//Инитализация
systemServer.initialize = function () {
    //логирование
    const scriptLoggerConfig = this.createEventData('minecraft:script_logger_config');
    scriptLoggerConfig.data.log_errors = true;
    scriptLoggerConfig.data.log_information = true;
    scriptLoggerConfig.data.log_warnings = true;
    this.broadcastEvent('minecraft:script_logger_config', scriptLoggerConfig);

    //проверка ивентов
    this.listenForEvent("minecraft:player_attacked_entity", (eventData) => this.playerAttack(eventData));
    this.listenForEvent("minecraft:entity_death", (deathData) => this.entityDeath(deathData));

    //переменные
    this.counter = 0;
    this.kraken = false;
};



systemServer.update = function () {
    this.counter++;

    //атака кракена
    if (this.counter == 200) {
        this.counter = 0;
        if (this.kraken) {
            this.Position = this.getComponent(this.Player, "minecraft:position");
            let Random = Math.random();
            if (Random < 0.4) {
                this.executeCommand(`/summon ark:sharik ${this.Position.data.x + 1.5} ${this.Position.data.y} ${this.Position.data.z}`, (commandResultData) => this.commandCallback(commandResultData));
                this.executeCommand(`/summon ark:sharik ${this.Position.data.x - 1.5} ${this.Position.data.y} ${this.Position.data.z}`, (commandResultData) => this.commandCallback(commandResultData));
                this.executeCommand(`/summon ark:sharik ${this.Position.data.x} ${this.Position.data.y} ${this.Position.data.z + 1.5}`, (commandResultData) => this.commandCallback(commandResultData));
                this.executeCommand(`/summon ark:sharik ${this.Position.data.x} ${this.Position.data.y} ${this.Position.data.z - 1.5}`, (commandResultData) => this.commandCallback(commandResultData));
            };
        };
    };
};



systemServer.commandCallback = function (commandResultData) { };


//проверка на атаку
systemServer.playerAttack = function (eventData) {
    this.Player = eventData.data.player;
    this.Entity = eventData.data.attacked_entity.__identifier__;
    if (this.Entity == "ark:kraken") this.kraken = true;
};


//проверка на смерть
systemServer.entityDeath = function (deathData) {
    let entity = deathData.data.entity.__identifier__;
    if (entity == "ark:kraken") this.kraken = false;
}



















systemServer.shutdown = function () { };







// Функция .log
systemServer.log = function (...items) {
    // Convert every parameter into a legible string and collect them into an array.
    const toString = (item) => {
        switch (Object.prototype.toString.call(item)) {
            case '[object Undefined]':
                return 'undefined'
            case '[object Null]':
                return 'null'
            case '[object String]':
                return `"${item}"`
            case '[object Array]':
                const array = item.map(toString)
                return `[${array.join(', ')}]`
            case '[object Object]':
                const object = Object.keys(item).map(
                    (key) => `${key}: ${toString(item[key])}`
                )
                return `{${object.join(', ')}}`
            case '[object Function]':
                return item.toString()
            default:
                return item
        }
    }

    // Join the string array items into a single string and print it to the world's chat.
    const chatEvent = this.createEventData('minecraft:display_chat_event')
    chatEvent.data.message = items.map(toString).join(' ')
    this.broadcastEvent('minecraft:display_chat_event', chatEvent)
}