import React from 'react';

const TeamSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-7">
            <div className="all_heading">
              <h2>Every MLB Team</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="custom_card">
              <div className="card_scroll">
                <div className="middle_card_body">
                  <div className="find_player_card pb-5">
                    <div className="find_player_content">
                      <div className="mid_heading">
                        <p>Search Player</p>
                      </div>
                      <form action="">
                        <div className="row">
                          <div className="col-md-8 py-2">
                            <div className="form-group">
                              <input type="text" className="form-control find_control" placeholder="Search Player" />
                            </div>
                          </div>
                          <div className="col-md-4 py-2">
                            <button type="submit" className="go_btn">Search</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mid_heading">
                    <p>2020 MLB Standings</p>
                  </div>
                  <div className="all_links">
                    <button type="button" className="collapsible">2020 MLB Standings</button>
                    <div className="mlbs_content">
                      <ul className="mlb_all_links">
                        <li><a href="">MLB Summary</a></li>
                        <li><a href="">Scores</a></li>
                        <li><a href="">Schedule</a></li>
                        <li><a href="">Leaders</a></li>
                        <li><a href="">Standings</a></li>
                        <li><a href="">Transactions</a></li>
                      </ul>
                      <p className="py-2"><a href="">Al Summary</a> :</p>
                      <ul>
                        <li><p>Leaders :</p></li>
                        <li><a href="">Batting</a></li>
                        <li><a href="">Pitching</a></li>
                        <li><a href="">Standings</a></li>
                        <li><a href="">· Attendance</a></li>
                      </ul>
                      <p className="py-2"><a href="">Nl Summary</a> :</p>
                      <ul>
                        <li><p>Leaders :</p></li>
                        <li><a href="">Batting</a></li>
                        <li><a href="">Pitching</a></li>
                        <li><a href="">Standings</a></li>
                        <li><a href="">· Attendance</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="all_data_table py-3">
                    <div className="row table_content_height">
                      <div className="col-md-6">
                        <div className="mid_heading">
                          <p>AL</p>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table_body">
                              <table className="table table-hover table-bordered table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Al</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">GB</th>
                                    <th scope="col">SRS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colSpan="100%">East</th>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="table_body">
                              <table className="table table-hover table-bordered table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Al</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">GB</th>
                                    <th scope="col">SRS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colSpan="100%">Central</th>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="table_body">
                              <table className="table table-hover table-bordered table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Al</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">GB</th>
                                    <th scope="col">SRS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colSpan="100%">West</th>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mid_heading">
                          <p>NL</p>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table_body">
                              <table className="table table-hover table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">Nl</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">GB</th>
                                    <th scope="col">SRS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colSpan="100%">East</th>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="table_body">
                              <table className="table table-hover table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">Nl</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">GB</th>
                                    <th scope="col">SRS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colSpan="100%">Central</th>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="table_body">
                              <table className="table table-hover table-striped table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">Nl</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">GB</th>
                                    <th scope="col">SRS</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colSpan="100%">West</th>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                  <tr>
                                    <td><a href="">y-TBR</a></td>
                                    <td>40</td>
                                    <td>20</td>
                                    <td>--</td>
                                    <td>0.9</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clinched_meaning py-3">
                    <p>y – clinched division</p>
                    <p>w – clinched wildcard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;