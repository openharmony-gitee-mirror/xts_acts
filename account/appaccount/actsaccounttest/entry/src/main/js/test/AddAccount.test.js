/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import account from '@ohos.account.appAccount'
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'

const STRCOUNT = 1025;
describe('ActsAccountAddAccount', function () {

    /*
     * @tc.number    : ActsAccountAddAccount_0100
     * @tc.name      : Add account calllback form
     * @tc.desc      : Add account in calllback form without additional information
     */
    it('ActsAccountAddAccount_0100', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0100 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>creat finish====");
        appAccountManager.addAccount("account_name_callback_first", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_0100 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.deleteAccount("account_name_callback_first", (err)=>{
                console.debug("====>delete Account ActsAccountAddAccount_0100 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(0);
                console.debug("====>ActsAccountAddAccount_0100 end====");
                done();
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0200
     * @tc.name      : Add account promise form
     * @tc.desc      : Add account in promise form without additional information
     */
    it('ActsAccountAddAccount_0200', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0200 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>creat finish====");
        console.debug("====>add account start====");
        try{
            await appAccountManager.addAccount("account_name_promise_first");
        }
        catch(err){
            console.error("====>add account fail err:" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>delete account start====");
        await appAccountManager.deleteAccount("account_name_promise_first");
        console.debug("====>ActsAccountAddAccount_0200 end====");
        done();   
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0300
     * @tc.name      : Add account calllback form
     * @tc.desc      : Add account in calllback form with additional information
     */
    it('ActsAccountAddAccount_0300', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0300 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>creat finish====");
        appAccountManager.addAccount("account_name_callback_second", "account_extraInfo_callback_second", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_0300 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.deleteAccount("account_name_callback_second", (err)=>{
                console.debug("====>delete Account ActsAccountAddAccount_0300 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(0);
                console.debug("====>ActsAccountAddAccount_0300 end====");
                done();
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0400
     * @tc.name      : Add account promise form
     * @tc.desc      : Add account in promise form with additional information
     */
    it('ActsAccountAddAccount_0400', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0400 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>creat finish====");
        console.debug("====>add account start====");
        try{
            await appAccountManager.addAccount("account_name_promise_second", "account_extraInfo_promise_second");
        }
        catch(err){
            console.error("====>add account fail err:" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>delete account start====");
        await appAccountManager.deleteAccount("account_name_promise_second");
        console.debug("====>ActsAccountAddAccount_0400 end====");
        done();
    });


    /*
     * @tc.number    : ActsAccountAddAccount_0500
     * @tc.name      : Add account calllback form
     * @tc.desc      : Repeatedly add the same name account and the same additional information
     */
    it('ActsAccountAddAccount_0500', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0500 start====");
        var appAccountManager = account.createAppAccountManager();
        appAccountManager.addAccount("account_name_callback_third", "account_extraInfo_callback_third", (err)=>{
            console.debug("====>add account first time ActsAccountAddAccount_0500 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.addAccount("account_name_callback_third", "account_extraInfo_callback_third", (err)=>{
                console.debug("====>add account second time ActsAccountAddAccount_0500 err:" + JSON.stringify(err));
                expect(err.code != 0).assertEqual(true);
                appAccountManager.deleteAccount("account_name_callback_third", (err)=>{
                    console.debug("====>delete Account ActsAccountAddAccount_0500 err:" + JSON.stringify(err));
                    expect(err.code).assertEqual(0);
                    console.debug("====>ActsAccountAddAccount_0500 end====");
                    done();
                });
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0600
     * @tc.name      : Add account promise form
     * @tc.desc      : Repeatedly add the same name account and the same additional information
     */
    it('ActsAccountAddAccount_0600', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0600 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>add account for the first time ActsAccountAddAccount_0600====");
        await appAccountManager.addAccount("account_name_promise_third", "account_extraInfo_promise_third");
        console.debug("====>add account for the second time ActsAccountAddAccount_0600 start====");
        try{
            await appAccountManager.addAccount("account_name_promise_third", "account_extraInfo_promise_third");
        }
        catch(err){
            console.debug("====>add account for the second time 0600 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            await appAccountManager.deleteAccount("account_name_promise_third");
            console.debug("====>ActsAccountAddAccount_0600 end====");
            done();
        }
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0700
     * @tc.name      : Add account calllback form
     * @tc.desc      : The account name exceeds the length limit of 1024
     */
    it('ActsAccountAddAccount_0700', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0700 start====");
        var bigAccountName = '';
        for (var i = 0; i < STRCOUNT; i++) {
            bigAccountName += 't';
        }
        var appAccountManager = account.createAppAccountManager();
        appAccountManager.addAccount(bigAccountName, "account_extraInfo_callback_fourth", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_0700 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_0700 end====");
            done();
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0800
     * @tc.name      : Add account promise form
     * @tc.desc      : The account name exceeds the length limit of 1024
     */
    it('ActsAccountAddAccount_0800', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0800 start====");
        var bigStr = '';
        for (var i = 0; i < STRCOUNT; i++) {
            bigStr += 't';
        }
        var appAccountManager = account.createAppAccountManager();
        try{
            await appAccountManager.addAccount(bigStr, "account_extraInfo_promise_fourth");
        }
        catch(err){
            console.debug("====>add account ActsAccountAddAccount_0800 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_0800 end====");
            done();
        }
    });

    /*
     * @tc.number    : ActsAccountAddAccount_0900
     * @tc.name      : Add account calllback form
     * @tc.desc      : Additional information exceeds the length limit of 1024
     */
    it('ActsAccountAddAccount_0900', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_0900 start====");
        var bigExtraInfo = '';
        for (var i = 0; i < STRCOUNT; i++) {
            bigExtraInfo += 't';
        }
        var appAccountManager = account.createAppAccountManager();
        appAccountManager.addAccount("account_name_callback_fifth", bigExtraInfo, (err)=>{
            console.debug("====>add account ActsAccountAddAccount_0900 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_0900 end====");
            done();
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1000
     * @tc.name      : Add account promise form
     * @tc.desc      : Additional information exceeds the length limit of 1024
     */
    it('ActsAccountAddAccount_1000', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1000 start====");
        var bigStrExtra = '';
        for (var i = 0; i < STRCOUNT; i++) {
            bigStrExtra += 't';
        }
        var appAccountManager = account.createAppAccountManager();
        try{
            await appAccountManager.addAccount("account_name_promise_fifth", bigStrExtra);
        }
        catch(err){
            console.debug("====>add account ActsAccountAddAccount_1000 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_1000 end====");
            done();
        }
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1100
     * @tc.name      : Add account calllback form
     * @tc.desc      : The account name is an empty string
     */
    it('ActsAccountAddAccount_1100', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1100 start====");
        var appAccountManager = account.createAppAccountManager();
        appAccountManager.addAccount("", "account_name_callback_sixth", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_1100 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_1100 end====");
            done();
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1200
     * @tc.name      : Add account promise form
     * @tc.desc      : The account name is an empty string
     */
    it('ActsAccountAddAccount_1200', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1200 start====");
        console.debug("====>ActsAccountAddAccount_1200 add account start====");
        var appAccountManager = account.createAppAccountManager();
        try{
            await appAccountManager.addAccount("", "account_name_promise_sixth");
        }
        catch(err){
            console.debug("====>add account ActsAccountAddAccount_1200 err:"+ JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_1200 end====");
            done();
        }
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1300
     * @tc.name      : Add account calllback form
     * @tc.desc      : Additional information is an empty string
     */
    it('ActsAccountAddAccount_1300', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1300 start====");
        var appAccountManager = account.createAppAccountManager();
        appAccountManager.addAccount("account_name_callback_seventh", "", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_1300 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.deleteAccount("account_name_callback_seventh", (err)=>{
                console.debug("====>delete Account ActsAccountAddAccount_1300 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(0);
                console.debug("====>ActsAccountAddAccount_1300 end====");
                done();
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1400
     * @tc.name      : Add account promise form
     * @tc.desc      : Additional information is an empty string
     */
    it('ActsAccountAddAccount_1400', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1400 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>add account ActsAccountAddAccount_1400 start====");
        try{
            await appAccountManager.addAccount("account_name_promise_seventh", "");
        }
        catch(err){
            console.error("====>add account ActsAccountAddAccount_1400 err:" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>delete account ActsAccountAddAccount_1400 start====");
        await appAccountManager.deleteAccount("account_name_promise_seventh");
        done();
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1500
     * @tc.name      : Add account calllback form
     * @tc.desc      : The account name is a special character such as a space
     */
    it('ActsAccountAddAccount_1500', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1500 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = " ";
        appAccountManager.addAccount(specialStr, "account_extraInfo_callback_eight", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_1500 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_1500 end====");
            done();
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1600
     * @tc.name      : Add account promise form
     * @tc.desc      : The account name is a special character such as a space
     */
    it('ActsAccountAddAccount_1600', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1600 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = " ";
        try{
            await appAccountManager.addAccount(specialStr, "account_extraInfo_promise_eighth");
        }
        catch(err){
            console.debug("====>add Account ActsAccountAddAccount_1600 err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            console.debug("====>ActsAccountAddAccount_1600 end====");
            done();
        }
    });


    /*
     * @tc.number    : ActsAccountAddAccount_1700
     * @tc.name      : Add account calllback form
     * @tc.desc      : The account name is a special string
     */
    it('ActsAccountAddAccount_1700', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1700 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
        appAccountManager.addAccount(specialStr, "account_extraInfo_callback_ninth", (err)=>{
            console.debug("====>add account ActsAccountAddAccount_1700 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.deleteAccount(specialStr, (err)=>{
                console.debug("====>delete Account ActsAccountAddAccount_1700 err" + JSON.stringify(err));
                expect(err.code).assertEqual(0);
                console.debug("====>ActsAccountAddAccount_1700 end====");
                done();
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1800
     * @tc.name      : Add account promise form
     * @tc.desc      : The account name is a special string
     */
    it('ActsAccountAddAccount_1800', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1800 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
        console.debug("====>add account ActsAccountAddAccount_1800====");
        try{
            await appAccountManager.addAccount(specialStr, "account_extraInfo_promise_ninth");
        }
        catch(err){
            console.error("====>add Account ActsAccountAddAccount_1800 err:" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>delete account ActsAccountAddAccount_1800====");
        await appAccountManager.deleteAccount(specialStr);
        console.debug("====>ActsAccountAddAccount_1800 end====");
        done();
    });

    /*
     * @tc.number    : ActsAccountAddAccount_1900
     * @tc.name      : Add account calllback form
     * @tc.desc      : Additional information is a special character such as a space
     */
    it('ActsAccountAddAccount_1900', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_1900 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = " ";
        appAccountManager.addAccount("account_name_callback_tenth", specialStr, (err)=>{
            console.debug("====>add account ActsAccountAddAccount_1900 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.deleteAccount("account_name_callback_tenth", (err)=>{
                console.debug("====>delete Account ActsAccountAddAccount_1900 err" + JSON.stringify(err));
                expect(err.code).assertEqual(0);
                console.debug("====>ActsAccountAddAccount_1900 end====");
                done();
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_2000
     * @tc.name      : Add account promise form
     * @tc.desc      : Additional information is a special character such as a space
     */
    it('ActsAccountAddAccount_2000', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_2000 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = " ";
        console.debug("====>add account ActsAccountAddAccount_2000====");
        try{
            await appAccountManager.addAccount("account_name_promise_tenth", specialStr);
        }
        catch(err){
            console.error("====>add Account ActsAccountAddAccount_2000 err:" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>delete account ActsAccountAddAccount_2000====");
        await appAccountManager.deleteAccount("account_name_promise_tenth");
        console.debug("====>ActsAccountAddAccount_2000 end====");
        done();
    });

    /*
     * @tc.number    : ActsAccountAddAccount_2100
     * @tc.name      : Add account calllback form
     * @tc.desc      : Additional information is a special string
     */
    it('ActsAccountAddAccount_2100', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_2100 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
        appAccountManager.addAccount("account_extraInfo_callback_eleventh", specialStr, (err)=>{
            console.debug("====>add account ActsAccountAddAccount_2100 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.deleteAccount("account_extraInfo_callback_eleventh", (err)=>{
                console.debug("====>delete Account ActsAccountAddAccount_2100 err" + JSON.stringify(err));
                expect(err.code).assertEqual(0);
                console.debug("====>ActsAccountAddAccount_2100 end====");
                done();
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_2200
     * @tc.name      : Add account promise form
     * @tc.desc      : Additional information is a special string
     */
    it('ActsAccountAddAccount_2200', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_2200 start====");
        var appAccountManager = account.createAppAccountManager();
        var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
        console.debug("====>add account ActsAccountAddAccount_2200====");
        try{
            await appAccountManager.addAccount("account_extraInfo_promise_eleventh", specialStr);
        }
        catch(err){
            console.error("====>add Account ActsAccountAddAccount_2200 err:" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>delete account ActsAccountAddAccount_2200====");
        await appAccountManager.deleteAccount("account_extraInfo_promise_eleventh");
        console.debug("====>ActsAccountAddAccount_2200 end====");
        done();
    });

    /*
     * @tc.number    : ActsAccountAddAccount_2300
     * @tc.name      : Add account calllback form
     * @tc.desc      : Repeatedly add accounts with the same name and different additional information
     */
    it('ActsAccountAddAccount_2300', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_2300 start====");
        var appAccountManager = account.createAppAccountManager();
        appAccountManager.addAccount("account_name_callback_same", "account_extraInfo_callback", (err)=>{
            console.debug("====>add account first time ActsAccountAddAccount_2300 err:" + JSON.stringify(err));
            expect(err.code).assertEqual(0);
            appAccountManager.addAccount("account_name_callback_same", "account_extraInfo_callback_different", (err)=>{
                console.debug("====>add account second time ActsAccountAddAccount_2300 err:" + JSON.stringify(err));
                expect(err.code != 0).assertEqual(true);
                appAccountManager.deleteAccount("account_name_callback_same", (err)=>{
                    console.debug("====>delete Account ActsAccountAddAccount_2300 err:" + JSON.stringify(err));
                    expect(err.code).assertEqual(0);
                    console.debug("====>ActsAccountAddAccount_2300 end====");
                    done();
                });
            });
        });
    });

    /*
     * @tc.number    : ActsAccountAddAccount_2400
     * @tc.name      : Add account promise form
     * @tc.desc      : Repeatedly add accounts with the same name and different additional information
     */
    it('ActsAccountAddAccount_2400', 0, async function (done) {
        console.debug("====>ActsAccountAddAccount_2400 start====");
        var appAccountManager = account.createAppAccountManager();
        console.debug("====>add account for the first time ActsAccountAddAccount_2400====");
        await appAccountManager.addAccount("account_name_promise_same", "account_extraInfo_promise");
        console.debug("====>add account for the second time ActsAccountAddAccount_2400====");
        try{
            await appAccountManager.addAccount("account_name_promise_same", "account_extraInfo_promise_different");
        }
        catch(err){
            console.debug("====>add account for the second time err:" + JSON.stringify(err));
            expect(err.code != 0).assertEqual(true);
            appAccountManager.deleteAccount("account_name_promise_same"); 
            console.debug("====>ActsAccountAddAccount_2400 end====");
            done();
        }
    });
})