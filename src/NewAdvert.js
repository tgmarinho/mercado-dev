import React, {Component} from 'react'
import HeaderInternal from './HeaderInternal'

import base, {storage} from './base'

class NewAdvert extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        const file = this.photo.files[0]
        const {name, size} = file
        const ref = storage.ref(name)
        ref
            .put(file)
            .then(img => {
                console.log(img)
                
                const newAdvert = {
                    name: this.name.value,
                    description: this.description.value,
                    price: this.price.value,
                    seller: this.seller.value,
                    photo: img.metadata.downloadURLs[0],
                    phone: this.phone.value
                }
                base.push('adverts', {
                    data: newAdvert
                }, (err) => {
                    if (err) {
                        
                    } else {
                        //
                    }
                })
            })

        e.preventDefault()
    }
    render() {
        return (
            <div>
                <HeaderInternal />
                <div className='container' style={{paddingTop: '120px'}}>
                    <h1>New Advert</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='photo'>Photo</label>
                            <input type='file' className='form-control' id='photo' placeholder='Photo' ref={(ref) => this.photo = ref} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' id='name' placeholder='Name' ref={(ref) => this.name = ref} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='description'>Description</label>
                            <textarea type='text' className='form-control' id='description' placeholder='Description' ref={(ref) => this.description = ref} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input type='text' className='form-control' id='price' placeholder='Price' ref={(ref) => this.price = ref} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' className='form-control' id='phone' placeholder='Phone' ref={(ref) => this.phone = ref} />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='seller'>Seller</label>
                            <input type='text' className='form-control' id='seller' placeholder='Seller' ref={(ref) => this.seller = ref} />
                        </div>

                        <button type='submit' className='btn btn-primary'>Save Advert</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewAdvert
