import Vue from 'vue'
import {shallow} from 'vue-test-utils'
import sinon from 'sinon'
import TestComponent from '../src/components/TestComponent'

describe('TestComponent', () => {
    let ClonedComponent, vm

    beforeEach(() => {
        ClonedComponent = shallow(TestComponent,{
            data: {
                message: 'Vesper'
            }
        })
    })

    // name of the component
    it('is called TestComponent', () => {
        const wrapper = shallow(TestComponent);

        expect(wrapper.name()).toBe('TestComponent')
    })

    // test if button has been clicked
    it('should change the message when clicked', function () {

        const listener = sinon.spy();

        const  wrapper = shallow(TestComponent)

        wrapper.setMethods({
            $emit: listener,
        })

        // click button
        wrapper.find('button').trigger('click')

        expect(listener.calledWith('addme'));

    });

    // test if you can change the messages attribute in data
    it('equals message to ["Vesper"]', () => {

        expect(ClonedComponent.vm.message).toEqual('Vesper')


    })

    // check the output in snapshot
    it('has the expected html structure', () => {
        expect(ClonedComponent.element).toMatchSnapshot()
    })



    it('has a created hook', () => {

        expect(typeof TestComponent.methods.clickMe).toBe('function')

    })


})