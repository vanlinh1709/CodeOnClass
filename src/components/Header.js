import Nav from './Nav';

const HeaderB  = {
    render: () => (
        `<div class="p-4 border rounded-3 mb-4">
        <h6>Quickly customize components</h6>
        <hr class="mb-4">
        <ul class="nav nav-pills mb-4" id="pillNav" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">Contact</button>
          </li>
        </ul>
        <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-white border rounded-5 shadow-sm" id="pillNav2" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-5 active" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabindex="-1">Contact</button>
          </li>
        </ul>
      </div>`
    )
}


const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') =>
        `<div>
            <h1>${name}</h1>
            <div>${Nav.render()}</div>
        </div>`
    // sau mũi tên là ngoặc tròn -> return kết quả
};

export default HeaderB;
