﻿var SiteRequest = function (site) {
    this.folderId = site.folderId;
    this.name = site.name ? site.name.encryptedString : null;
    this.uri = site.uri ? site.uri.encryptedString : null;
    this.username = site.username ? site.username.encryptedString : null;
    this.password = site.password ? site.password.encryptedString : null;
    this.notes = site.notes ? site.notes.encryptedString : null;
    this.favorite = site.favorite;
};

var FolderRequest = function (folder) {
    this.name = folder.name ? folder.name.encryptedString : null;
};

var TokenRequest = function (email, masterPasswordHash, device) {
    this.email = email;
    this.masterPasswordHash = masterPasswordHash;
    if (device) {
        this.device = new DeviceRequest(device);
    }
    this.device = null;
};

var RegisterRequest = function () {
    this.name = null;
    this.email = null;
    this.masterPasswordHash = null;
    this.masterPasswordHint = null;
};

var PasswordHintRequest = function () {
    this.email = null;
};

var TokenTwoFactorRequest = function () {
    this.code = null;
    this.provider = null;
    this.device = null;
};

var DeviceTokenRequest = function () {
    this.pushToken = null;
};

var DeviceRequest = function () {
    this.type = null;
    this.name = null;
    this.identifier = null;
    this.pushToken = null;
};