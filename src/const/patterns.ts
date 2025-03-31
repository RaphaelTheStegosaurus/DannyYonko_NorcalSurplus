export const PATTERN_CUSTOMER_NAME = `^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ'\-]+(?:\s[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ'\-]+)+$`;
export const PATTERN_CUSTOMER_EMAIL = `([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){0,1}`;
export const PATTERN_CUSTOMER_MESSAGE = `[<>;"'{}\[\]\\\/\|\*\+\=\(\)\$&%!#@\s\t\n\r]|--|;|script|<script|<iframe|<embed|<object|javascript:|vbscript:|data:|file:|ftp:|php:|sql|union|select|insert|update|delete|drop|alter|create|rename|truncate|show|desc|information_schema`;
