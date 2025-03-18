export default {
    editor: {
        label: {
            en: 'Synergy Forms Creator',
        },
    },
    properties: {
        licenseKey: {
            label: {
                en: 'License key',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
        componentBind: {
            label: {
                en: 'Content variable',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
        },
    },
    triggerEvents: [
        {
            name: 'json:save',
            label: { en: 'On json saved' },
            event: '',
        },
    ],
};
