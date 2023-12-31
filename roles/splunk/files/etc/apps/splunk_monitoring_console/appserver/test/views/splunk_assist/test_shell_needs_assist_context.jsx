import { configure, mount } from 'enzyme';
import EnzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import { AssistContext } from '../../../../src/views/splunk_assist/common/hooks/AssistContextProvider';
import ErrorPage from '../../../../src/views/splunk_assist/error/components/ErrorPage/ErrorPage';
import FipsPage from '../../../../src/views/splunk_assist/onboarding/components/FipsPage/FipsPage';
import Loading from '../../../../src/views/splunk_assist/shell/components/Loading';
import OnboardingStartScreen from '../../../../src/views/splunk_assist/onboarding/components/OnboardingStartScreen';
import { ShellNeedsAssistContext } from '../../../../src/views/splunk_assist/shell/components/ShellNeedsAssistContext';
import { ShellNeedsRemoteConfigContext } from '../../../../src/views/splunk_assist/shell/components/ShellNeedsRemoteConfigContext';

suite('ShellNeedsAssistContext', () => {
    setup(() => {
        configure({ adapter: new EnzymeAdapterReact16() });
    });

    test('Show the onboarding screen when SUD is off', () => {
        const wrapper = mount(
            <AssistContext.Provider
                value={{
                    error: undefined,
                    statuses: {
                        isConnectivityOpen: false,
                        isFipsEnabled: false,
                        isSUDEnabled: false,
                        isAssistEnabled: false,
                    },
                    isLoading: false,
                }}
            >
                <ShellNeedsAssistContext />
            </AssistContext.Provider>
        );
        assert.ok(wrapper, 'wrapper instantiated successfully');
        assert.equal(wrapper.find(OnboardingStartScreen).length, 1, 'Onboarding page');
    });

    test('Shows the onboarding start screen when SUD is on, connectivity is off, and Assist is Activated', () => {
        const wrapper = mount(
            <AssistContext.Provider
                value={{
                    error: undefined,
                    statuses: {
                        isConnectivityOpen: false,
                        isFipsEnabled: false,
                        isSUDEnabled: true,
                        isAssistEnabled: true,
                    },
                    isLoading: false,
                }}
            >
                <ShellNeedsAssistContext />
            </AssistContext.Provider>
        );
        assert.ok(wrapper, 'wrapper instantiated successfully');
        assert.equal(wrapper.find(OnboardingStartScreen).length, 1, 'Onboarding page');
    });

    test('Shows the Fips page when SUD is on, connectivity is off, and Assist is Activated and fips is on', () => {
        const wrapper = mount(
            <AssistContext.Provider
                value={{
                    error: undefined,
                    statuses: {
                        isConnectivityOpen: false,
                        isFipsEnabled: true,
                        isSUDEnabled: true,
                        isAssistEnabled: true,
                    },
                    isLoading: false,
                }}
            >
                <ShellNeedsAssistContext />
            </AssistContext.Provider>
        );
        assert.ok(wrapper, 'wrapper instantiated successfully');
        assert.equal(wrapper.find(FipsPage).length, 1, 'Connectivity Blocked Page');
    });

    test('Shows the ShellNeedsRemoteConfigContext when SUD is on and connectivity is open ', () => {
        const wrapper = mount(
            <AssistContext.Provider
                value={{
                    error: undefined,
                    statuses: {
                        isConnectivityOpen: true,
                        isFipsEnabled: false,
                        isSUDEnabled: true,
                        isAssistEnabled: false,
                    },
                    isLoading: false,
                }}
            >
                <ShellNeedsAssistContext />
            </AssistContext.Provider>
        );
        assert.ok(wrapper, 'wrapper instantiated successfully');
        assert.equal(wrapper.find(ShellNeedsRemoteConfigContext).length, 1, 'Loading page');
    });

    test('Shows a loading message while AssistContext is loading ', () => {
        const wrapper = mount(
            <AssistContext.Provider
                value={{
                    error: undefined,
                    statuses: {
                        isConnectivityOpen: false,
                        isFipsEnabled: false,
                        isSUDEnabled: true,
                        isAssistEnabled: false,
                    },
                    isLoading: true,
                }}
            >
                <ShellNeedsAssistContext />
            </AssistContext.Provider>
        );
        assert.ok(wrapper, 'wrapper instantiated successfully');
        assert.equal(wrapper.find(Loading).length, 1, 'Loading page');
    });

    test('Shows an error message when there is an error loading AssistContext ', () => {
        const wrapper = mount(
            <AssistContext.Provider
                value={{
                    error: 'error',
                    statuses: {
                        isConnectivityOpen: false,
                        isFipsEnabled: false,
                        isSUDEnabled: true,
                        isAssistEnabled: false,
                    },
                    isLoading: true,
                }}
            >
                <ShellNeedsAssistContext />
            </AssistContext.Provider>
        );

        assert.equal(wrapper.find(ErrorPage).length, 1, 'Error page');
    });
});
